import instance from "@/apis/instance";

const TEAM = "23-3";

export const getFeedList = async (limit = 8, offset = 0) => {
  try {
    const response = await instance.get("subjects/", {
      params: {
        limit,
        offset,
        team: TEAM,
      },
    });
    return response.data;
  } catch (error) {
    console.error("피드 리스트 데이터 불러오기 에러", error);
    throw error;
  }
};

export const createFeed = async (name) => {
  try {
    const response = await instance.post("subjects/", {
      name,
      team: TEAM,
    });
    return response.data;
  } catch (error) {
    console.error("피드 생성 에러", error);
    throw error;
  }
};

export const getFeedData = async (id) => {
  try {
    const response = await instance.get(`subjects/${id}/`, {
      params: {
        team: TEAM,
        id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("피드 데이터 불러오기 에러", error);
    throw error;
  }
};

export const deleteFeed = async (id) => {
  try {
    const response = await instance.delete(`subjects/${id}/`, {
      id,
      team: TEAM,
    });
    return response.data;
  } catch (error) {
    console.error("피드 삭제 에러", error);
    throw error;
  }
};

export const getQuestions = async (subjectId, limit = 8, offset = 0) => {
  try {
    const response = await instance.get(`subjects/${subjectId}/questions/`, {
      params: {
        limit,
        offset,
        team: TEAM,
        subject_id: subjectId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("피드 질문 리스트 데이터 불러오기 에러", error);
    throw error;
  }
};

export const createQuestion = async (subjectId, content) => {
  try {
    const response = await instance.post(`subjects/${subjectId}/questions/`, {
      content,
      team: TEAM,
      subject_id: subjectId,
    });
    return response.data;
  } catch (error) {
    console.error("질문 생성 에러", error);
    throw error;
  }
};
