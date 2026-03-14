import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { subjectApi } from "@/apis/subject";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { MessagesIcon } from "@/assets/icons/MessagesIcon";

import QuestionCount from "@/components/containers/Question/QuestionCount/QuestionCount";
import QuestionItems from "@/components/containers/Question/QuestionItems/QuestionItems";
import PostModal from "@/components/containers/PostModal/PostModal";

import * as S from "@/components/containers/Question/QuestionList.style";

export default function QuestionList({ subjectId, isAnswer }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const fetchQuestions = useCallback(async () => {
    if (!subjectId) return;

    setIsLoading(true);
    try {
      const data = await subjectApi.getQuestions(subjectId);
      setQuestions(data.results);
    } catch (error) {
      // Todo: 에러 핸들링 UI 추가
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  }, [subjectId]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAnswer && (
        <S.ButtonWrapper>
          <S.DeleteFeedButton
            onClick={
              () => console.log("피드 삭제") /* Confrim 띄우고 기능구현 */
            }
          >
            피드 삭제하기
          </S.DeleteFeedButton>
        </S.ButtonWrapper>
      )}
      <S.QuestionListWrapper>
        <QuestionCount questions={questions} />
        <QuestionItems questions={questions} isAnswer={isAnswer} />
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
          onClose={() => setIsOpen(false)}
          onSuccess={fetchQuestions}
        />
      )}
    </>
  );
}
