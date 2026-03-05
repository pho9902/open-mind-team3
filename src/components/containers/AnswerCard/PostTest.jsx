import { getQuestions } from "@/apis/answer";
import AnswerCard from "@/components/containers/AnswerCard";
import { useEffect, useState, useCallback } from "react";

export default function PostTest() {
  // 임시 post 페이지
  // Todo
  // post 페이지 개발 완료시 answercard 테스트 위치 변경
  // post 관련 api 개발 완료시 profile image 추가

  const [questions, setQuestions] = useState([]);

  const getQuestionsList = useCallback(() => {
    getQuestions()
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getQuestionsList();
  }, [getQuestionsList]);

  if (!questions.length) return <div>empty</div>;

  return questions.map((question) =>
    question.answer ? (
      <div key={question.id}>답변 {question.answer.content}</div>
    ) : (
      <AnswerCard
        key={question.id}
        questionId={question.id}
        getQuestionsList={getQuestionsList}
      />
    ),
  );
}
