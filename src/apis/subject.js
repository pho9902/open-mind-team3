import instance from "@/apis/instance";

export const subjectApi = {
  // 피드 생성
  createFeed: (name) => instance.post("subjects/", { name }),

  // 피드 리스트 조회
  getFeedList: (limit = 8, offset = 0) =>
    instance.get("subjects/", {
      params: { limit, offset },
    }),

  // 피드 개별 데이터 조회
  getFeedData: (id) => instance.get(`subjects/${id}/`),

  // 개별 피드 삭제
  deleteFeed: (id) => instance.delete(`subjects/${id}/`),

  // 피드가 가진 질문들 조회
  getQuestions: (subjectId, limit = 8, offset = 0) =>
    instance.get(`subjects/${subjectId}/questions/`, {
      params: { limit, offset },
    }),

  // 피드에 질문 요청
  createQuestion: (subjectId, content) =>
    instance.post(`subjects/${subjectId}/questions/`, { content }),
};
