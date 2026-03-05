import instance from "./instance";

export async function getQuestions() {
  return await instance.get("subjects/13312/questions/");
}

export async function createAnswer(questionId, data) {
  return await instance.post(`questions/${questionId}/answers/`, data);
}
