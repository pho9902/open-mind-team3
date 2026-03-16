import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { subjectApi } from "@/apis/subject";
import { openToast } from "@/utils/toast";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { MessagesIcon } from "@/assets/icons/MessagesIcon";
import { STORAGE } from "@/constants";
import { LoadingSpinner } from "@/assets/icons/LoadingSpinnerIcon";

import QuestionCount from "@/components/containers/Question/QuestionCount/QuestionCount";
import QuestionItems from "@/components/containers/Question/QuestionItems/QuestionItems";
import PostModal from "@/components/containers/PostModal/PostModal";
import Confirm from "@/components/common/Confirm";
import InfiniteScrollObserver from "@/components/common/InfiniteScroll/InfiniteScrollObserver";
import SkeletonQuestion from "@/components/containers/Question/SkeletonQuestion/SkeletonQuestion";

import * as S from "@/components/containers/Question/QuestionList.style";

const LIMIT = 8;

export default function QuestionList({ subjectData, subjectId, isAnswer }) {
  const [questions, setQuestions] = useState([]);
  const [totalCount, setTotalCount] = useState(0); // 질문 총 개수
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const navigate = useNavigate();
  const offsetRef = useRef(0);

  const fetchQuestions = useCallback(
    async (isInitial = false) => {
      if (isLoading || (!isInitial && !hasNext)) return;

      setIsLoading(true);
      try {
        const nextOffset = isInitial ? 0 : offsetRef.current;

        const response = await subjectApi.getQuestions(
          subjectId,
          LIMIT,
          nextOffset,
        );
        const { results, next, count } = response;

        setQuestions((prev) => {
          // 1. 초기 로딩(isInitial)일 때는 그냥 새 데이터를 덮어씌웁니다.
          if (isInitial) return results;

          // 2. 추가 로딩일 때는 기존 리스트(prev)에 없는 데이터만 골라냅니다.
          const uniqueResults = results.filter(
            (newQuestion) =>
              !prev.some((oldQuestion) => oldQuestion.id === newQuestion.id),
          );

          // 3. 기존 데이터 + 중복되지 않은 새 데이터만 합칩니다.
          return [...prev, ...uniqueResults];
        });
        setTotalCount(count);
        setHasNext(!!next);
        offsetRef.current = nextOffset + results.length;
      } catch (error) {
        openToast.error("질문 목록을 가져오는데 실패했습니다.");
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [subjectId, isLoading, hasNext],
  );

  useEffect(() => {
    setQuestions([]);
    setHasNext(true);
    offsetRef.current = 0;
    fetchQuestions(true);
  }, [subjectId]);

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
        <QuestionCount totalCount={totalCount} />
        <QuestionItems
          questions={questions}
          isAnswer={isAnswer}
          fetchQuestions={fetchQuestions}
          subjectData={subjectData}
        />

        {questions.length > 0 && !isLoading && hasNext && (
          <InfiniteScrollObserver onIntersect={() => fetchQuestions(false)} />
        )}

        {questions.length > 0 && isLoading && (
          <S.SpinnerWrapper>
            <LoadingSpinner size={40} />
          </S.SpinnerWrapper>
        )}
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
          onSuccess={() => fetchQuestions(true)}
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
