import instance from "@/apis/instance";

export const answerApi = {
  //개별 답변 조회 api 붙이고 나서 필요없다고 판단되면 삭제
  // getAnswer: (subjectId) => instance.get(`answers/${subjectId}/`),

  //답변 수정
  editAnswer: (answerId, content) =>
    instance.put(`answers/${answerId}/`, {
      content,
      isRejected: false,
    }),
  // 답변 거절
  rejectAnswer: (answerId) =>
    instance.patch(`answers/${answerId}/`, {
      content: "답변 거절",
      isRejected: true,
    }),
};
