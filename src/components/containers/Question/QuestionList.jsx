import { useEffect, useState } from "react";
import { getQuestions } from "@/apis/questions";
import { MessagesIcon } from "@/assets/icons/Icons";
import QuestionCount from "@/components/containers/Question/QuestionCount/QuestionCount";
import QuestionItem from "@/components/containers/Question/QuestionItem/QuestionItem";
import PostModal from "@/components/containers/PostModal/PostModal";

import * as S from "./QuestionList.style";

export default function QuestionList({ subjectId }) {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    <S.Container>
      <S.QuestionListWrapper>
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
  );
}
