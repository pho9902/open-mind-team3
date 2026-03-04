import instance from "./instance";

export async function getQuestions(subjectId) {
  subjectId = 13312; // 테스트용 고정값
  try {
    const response = await instance.get(`/subjects/${subjectId}/questions/`, {
      params: {
        limit: 8,
        offset: 0,
      },
    });
    console.log("질문목록:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

export async function postQuestions(subjectId, questionContent) {
  subjectId = 13312; // 테스트용 고정값
  try {
    const response = await instance.post(`/subjects/${subjectId}/questions/`, {
      content: questionContent,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating question:", error);
    throw error;
  }
}
