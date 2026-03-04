import axios from "axios";

const instance = axios.create({
  baseURL: "https://openmind-api.vercel.app/23-3/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
