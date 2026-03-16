import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { subjectApi } from "@/apis/subject";
import { openToast } from "@/utils/toast";
import { STORAGE } from "@/constants/index";
import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionList from "@/components/containers/Question/QuestionList";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

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
        setIsError(
          error.response?.data?.detail || "데이터를 가져오는데 실패했습니다.",
        );
        openToast("존재하지 않는 사용자입니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubjectData();
  }, [subjectId]);

  if (isError) {
    return (
      <NotFoundPage
        title="존재하지 않는 사용자입니다."
        description={`해당 사용자의 피드를 찾을 수 없거나, 삭제된 피드입니다.\n 다시 한 번 확인해 주세요.`}
      />
    );
  }

  // Todo: 스피너로 변경
  if (isLoading || !subjectData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FeedHeader subjectData={subjectData} />
      <S.Container>
        <QuestionList
          subjectData={subjectData}
          subjectId={subjectId}
          isAnswer={isAnswer}
        />
      </S.Container>
    </>
  );
}
