import { useEffect, useState } from "react";
import { getQuestions } from "@/apis/questions";
import QuestionCount from "@/components/containers/Question/QuestionCount";
import QuestionItem from "@/components/containers/Question/QuestionItem";
import PostModal from "@/components/containers/PostModal/index";

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
    <div>
      <div>
        <QuestionCount questions={questions} />
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            answer={question.answer}
          />
        ))}
      </div>
      <button
        onClick={() => setIsOpen(true)}
        style={{ background: "blue", color: "white" }} // 테스트 스타일
      >
        질문 작성하기
      </button>

      {isOpen && (
        <PostModal subjectId={subjectId} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
