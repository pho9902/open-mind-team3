import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuestionList from "@/components/containers/Question/QuestionList";

export default function FeedPage() {
  const navigate = useNavigate();
  const { subjectId, "*": subpath } = useParams();

  const isAnswer = subpath === "answer";

  useEffect(() => {
    if (subpath && !isAnswer) navigate("/err", { replace: true });
  }, [subpath, navigate]);

  return <QuestionList subjectId={subjectId} isAnswer={isAnswer} />;
}
