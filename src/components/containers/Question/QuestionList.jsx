import { useEffect, useState, useRef } from "react";
import { getQuestions } from "@/apis/questions";
import { MessagesIcon } from "@/assets/icons/Icons";
import {
  FeedHeader,
  ScrollFeedHeader,
} from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionCount from "@/components/containers/Question/QuestionCount/QuestionCount";
import QuestionItem from "@/components/containers/Question/QuestionItem/QuestionItem";
import PostModal from "@/components/containers/PostModal/PostModal";

import * as S from "./QuestionList.style";

export default function QuestionList({ subjectId }) {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const elementTop = scrollRef.current.getBoundingClientRect().top;
    elementTop <= 50 ? setIsHeaderVisible(true) : setIsHeaderVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      try {
        const data = await getQuestions(subjectId);
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuestions();
  }, [subjectId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isHeaderVisible ? <ScrollFeedHeader /> : <FeedHeader />}
      <S.Container>
        <S.QuestionListWrapper ref={scrollRef}>
          <QuestionCount questions={questions} />
          {questions.length === 0 ? (
            <p>테스트질문없음아이콘</p>
          ) : (
            questions.map((question) => (
              <QuestionItem
                key={question.id}
                question={question}
                answer={question.answer}
              />
            ))
          )}
        </S.QuestionListWrapper>
        <S.QuestionPostButton onClick={() => setIsOpen(true)}>
          <MessagesIcon size={24} />
          <span>질문 작성하기</span>
        </S.QuestionPostButton>

        {isOpen && (
          <PostModal subjectId={subjectId} onClose={() => setIsOpen(false)} />
        )}
      </S.Container>
    </>
  );
}
