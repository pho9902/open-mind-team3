import instance from "@/apis/instance";

export const createSubject = async (name) => {
  try {
    const response = await instance.post("/subjects/", {
      name: name,
      team: "23-3",
    });
    return response.data;
  } catch (error) {
    console.error("유저 피드 생성 에러", error);
    throw error;
  }
};
