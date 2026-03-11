import axios from "axios";

const TEAM = "23-3";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    if (config.method?.toLowerCase() === "get") {
      config.params = { team: TEAM, ...config.params };
      return config;
    }

    if (!config.data) return config;

    if (config.data instanceof FormData) {
      if (!config.data.has("team")) config.data.append("team", TEAM);
    } else {
      config.data = { team: TEAM, ...config.data };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API 에러:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default instance;
