export default function QuestionCount({ questions }) {
  return (
    <>
      {questions.length === 0 ? (
        <p>아직 질문이 없습니다.</p>
      ) : (
        <p>{questions.length}개의 질문이 있습니다.</p>
      )}
    </>
  );
}
