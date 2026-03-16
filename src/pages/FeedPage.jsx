import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { subjectApi } from "@/apis/subject";
import { openToast } from "@/utils/toast";
import { STORAGE } from "@/constants/index";
import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionList from "@/components/containers/Question/QuestionList";

import * as S from "@/components/containers/Question/QuestionList.style";

export default function FeedPage() {
  const [subjectData, setSubjectData] = useState(null);

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
      try {
        const data = await subjectApi.getFeedData(subjectId);
        setSubjectData(data);
      } catch (error) {
        // Todo: 에러 핸들링 UI 추가
        console.error("Error fetching subject data:", error);
      }
    };
    fetchSubjectData();
  }, [subjectId]);

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
