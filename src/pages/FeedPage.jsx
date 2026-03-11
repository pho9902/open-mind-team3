import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionList from "@/components/containers/Question/QuestionList";

import * as S from "@/components/containers/Question/QuestionList.style";

export default function FeedPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const headerRef = useRef(null);

  const navigate = useNavigate();
  const { subjectId, "*": subpath } = useParams();

  const isAnswer = subpath === "answer";

  useEffect(() => {
    if (subpath && !isAnswer) navigate("/err", { replace: true });
  }, [subpath, navigate]);

  /* header scroll observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FeedHeader $isScroll={isHeaderVisible} ref={headerRef} />
      <S.Container>
        <QuestionList subjectId={subjectId} isAnswer={isAnswer} />
      </S.Container>
    </>
  );
}
