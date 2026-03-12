import { useEffect, useState, useRef, useCallback } from "react";

import { getQuestions } from "@/apis/questions";
import { MessagesIcon } from "@/assets/icons/MessagesIcon";

import * as S from "./QuestionList.style";
import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionCount from "@/components/containers/Question/QuestionCount/QuestionCount";
import QuestionItems from "@/components/containers/Question/QuestionItems/QuestionItems";
import PostModal from "@/components/containers/PostModal/PostModal";

export default function QuestionList({ subjectId, isAnswer }) {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const headerRef = useRef(null);

  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getQuestions(subjectId);
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  }, [subjectId]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  // header 스크롤 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FeedHeader $isScroll={isHeaderVisible} ref={headerRef} />
      <S.Container>
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
        <S.QuestionPostButton onClick={() => setIsOpen(true)}>
          <MessagesIcon size={24} />
          <span>질문 작성하기</span>
        </S.QuestionPostButton>

        {isOpen && (
          <PostModal
            subjectId={subjectId}
            onClose={() => setIsOpen(false)}
            onSuccess={fetchQuestions}
          />
        )}
      </S.Container>
    </>
  );
}
