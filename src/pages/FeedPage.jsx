import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { subjectApi } from "@/apis/subject";
import { openToast } from "@/utils/toast";
import { STORAGE } from "@/constants/index";

import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionList from "@/components/containers/Question/QuestionList";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import SkeletonQuestion from "@/components/containers/Question/SkeletonQuestion/SkeletonQuestion";

import * as S from "@/components/containers/Question/QuestionList.style";

export default function FeedPage() {
  const [subjectData, setSubjectData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { subjectId, "*": subpath } = useParams();

  const isAnswer = subpath === "answer";

  const myFeedId = localStorage.getItem(STORAGE.FEED_ID);
  const isMyFeed = String(myFeedId) === String(subjectId);

  useEffect(() => {
    if (isAnswer && !isMyFeed) {
      openToast.error("답변 페이지는 본인 피드에서만 접근 가능합니다.");
      navigate(`/post/${subjectId}`, { replace: true });
      return;
    }

    if (isMyFeed && !isAnswer) {
      navigate(`/post/${subjectId}/answer`, { replace: true });
    }

    if (subpath && !isAnswer) {
      navigate("/not-found", { replace: true });
    }
  }, [subjectId, subpath, navigate, isAnswer, isMyFeed]);

  /* 질문대상자 정보 가져오기 */
  useEffect(() => {
    if (!subjectId) return;

    const fetchSubjectData = async () => {
      setIsLoading(true);
      try {
        const data = await subjectApi.getFeedData(subjectId);
        setSubjectData(data);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            setIsError("NOT_FOUND");
            openToast.error("존재하지 않는 사용자입니다.");
          } else {
            setIsError("SERVER_ERROR");
            openToast.error("데이터를 가져오는데 실패했습니다.");
          }
        } else if (error.request) {
          setIsError("NETWORK_ERROR");
          openToast.error("서버와의 통신에 실패했습니다.");
        } else {
          setIsError("UNKNOWN");
          openToast.error("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubjectData();
  }, [subjectId]);

  if (isError === "NOT_FOUND") {
    return (
      <NotFoundPage
        title="존재하지 않는 사용자입니다."
        description="삭제되었거나 잘못된 접근입니다."
      />
    );
  }
  if (isError === "SERVER_ERROR") {
    return (
      <NotFoundPage
        title="서버 오류"
        description="잠시 후 다시 시도해주세요."
      />
    );
  }
  if (isError === "NETWORK_ERROR") {
    return (
      <NotFoundPage
        title="네트워크 오류"
        description="인터넷 연결을 확인해주세요."
      />
    );
  }

  return (
    <>
      <FeedHeader subjectData={subjectData} />
      {isLoading ? (
        <SkeletonQuestion />
      ) : (
        <S.Container>
          <QuestionList
            subjectData={subjectData}
            subjectId={subjectId}
            isAnswer={isAnswer}
          />
        </S.Container>
      )}
    </>
  );
}
