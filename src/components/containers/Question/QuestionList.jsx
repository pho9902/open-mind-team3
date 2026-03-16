import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { subjectApi } from "@/apis/subject";
import { openToast } from "@/utils/toast";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { MessagesIcon } from "@/assets/icons/MessagesIcon";
import { STORAGE } from "@/constants";

import QuestionCount from "@/components/containers/Question/QuestionCount/QuestionCount";
import QuestionItems from "@/components/containers/Question/QuestionItems/QuestionItems";
import PostModal from "@/components/containers/PostModal/PostModal";
import Confirm from "@/components/common/Confirm";
import SkeletonQuestion from "@/components/containers/Question/SkeletonQuestion/SkeletonQuestion";

import * as S from "@/components/containers/Question/QuestionList.style";

export default function QuestionList({ subjectData, subjectId, isAnswer }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const fetchQuestions = useCallback(async () => {
    if (!subjectId) return;

    setIsLoading(true);
    try {
      const data = await subjectApi.getQuestions(subjectId);
      setQuestions(data.results);
    } catch (error) {
      openToast.error("질문 목록을 가져오는데 실패했습니다.");
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  }, [subjectId]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleDeleteFeed = async () => {
    try {
      await subjectApi.deleteFeed(subjectId);

      openToast.success(
        "피드가 삭제되었습니다, 잠시 후 메인화면으로 이동합니다",
      );
      localStorage.removeItem(STORAGE.FEED_ID);
      navigate("/");
    } catch (error) {
      openToast.error("피드 삭제에 실패했습니다.");
    }
  };

  if (isLoading) {
    return <SkeletonQuestion />;
  }

  return (
    <>
      {isAnswer && (
        <S.ButtonWrapper>
          <S.DeleteFeedButton onClick={() => setDeleteConfirmOpen(true)}>
            피드 삭제하기
          </S.DeleteFeedButton>
        </S.ButtonWrapper>
      )}

      <S.QuestionListWrapper>
        <QuestionCount questions={questions} />
        <QuestionItems
          questions={questions}
          isAnswer={isAnswer}
          fetchQuestions={fetchQuestions}
          subjectData={subjectData}
        />
      </S.QuestionListWrapper>

      <S.FloatingGroup>
        <S.FloatingButtonWrapper>
          <span>질문 목록보기</span>
          <S.MenuButton as={Link} to={"/list"}>
            <MenuIcon size={24} />
          </S.MenuButton>
        </S.FloatingButtonWrapper>
        <S.FloatingButtonWrapper>
          <span>질문 작성하기</span>
          <S.QuestionPostButton onClick={() => setIsOpen(true)}>
            <MessagesIcon size={24} />
          </S.QuestionPostButton>
        </S.FloatingButtonWrapper>
      </S.FloatingGroup>

      {isOpen && (
        <PostModal
          subjectId={subjectId}
          subjectData={subjectData}
          onClose={() => setIsOpen(false)}
          onSuccess={fetchQuestions}
        />
      )}

      {deleteConfirmOpen && (
        <Confirm
          header="피드를 삭제하시겠습니까?"
          description="피드를 삭제하면 모든 질문과 답변 데이터가 사라집니다."
          onConfirm={handleDeleteFeed}
          setIsOpen={setDeleteConfirmOpen}
        />
      )}
    </>
  );
}
