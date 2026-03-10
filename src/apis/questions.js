import instance from "@/apis/instance";

export async function getQuestions(subjectId) {
  subjectId = 13362; // 테스트용 고정값
  // subjectId = 13311; // 테스트용 고정값2
  try {
    const response = await instance.get(`/subjects/${subjectId}/questions/`, {
      params: {
        limit: 8,
        offset: 0,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

export async function postQuestions(subjectId, questionContent) {
  subjectId = 13362; // 테스트용 고정값
  // subjectId = 13311; // 테스트용 고정값2
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
