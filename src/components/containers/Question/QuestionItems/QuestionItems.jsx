import EmptyQuestion from "@/components/containers/Question/EmptyQuestion/EmptyQuestion";
import QuestionItem from "@/components/containers/Question/QuestionItem/QuestionItem";

export default function QuestionItems({ questions, isAnswer, fetchQuestions }) {
  return (
    <>
      {questions.length === 0 ? (
        <EmptyQuestion />
      ) : (
        questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            answer={question.answer}
            isAnswer={isAnswer}
            fetchQuestions={fetchQuestions}
          />
        ))
      )}
    </>
  );
}
