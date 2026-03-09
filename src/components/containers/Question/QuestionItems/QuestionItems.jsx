import QuestionItem from "@/components/containers/Question/QuestionItem/QuestionItem";

import * as S from "@/components/containers/Question/QuestionItems/QuestionItems.style";

export default function QuestionItems({ questions }) {
  return (
    <>
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
    </>
  );
}
