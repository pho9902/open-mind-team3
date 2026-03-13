import instance from "@/apis/instance";

export const questionApi = {
  // 개별 질문 조회
  getQuestion: (questionId) => instance.get(`questions/${questionId}/`),

  // 개별 질문 삭제
  deleteQuestion: (questionId) => instance.delete(`questions/${questionId}/`),

  // 질문 리액션 등록
  createReaction: (questionId, type) =>
    instance.post(`questions/${questionId}/reaction/`, { type }),

  // 질문 답변 등록
  createAnswer: (questionId, content) =>
    instance.post(`questions/${questionId}/answers/`, { content }),
};
