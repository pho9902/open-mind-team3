import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { subjectApi } from "@/apis/subject";
import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionList from "@/components/containers/Question/QuestionList";

import * as S from "@/components/containers/Question/QuestionList.style";

export default function FeedPage() {
  const [subjectData, setSubjectData] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const headerRef = useRef(null);

  const navigate = useNavigate();
  const { subjectId, "*": subpath } = useParams();

  const isAnswer = subpath === "answer";

  useEffect(() => {
    if (subpath && !isAnswer) navigate("/err", { replace: true });
  }, [subpath, navigate]);

  /* 질문대상자 정보 가져오기 */
  useEffect(() => {
    if (!subjectId) return;

    const fetchSubjectData = async () => {
      try {
        const data = await subjectApi.getFeedData(subjectId);
        setSubjectData(data);
      } catch (error) {
        // Todo: 에러 핸들링 UI 추가
        console.error("Error fetching subject data:", error);
      }
    };
    fetchSubjectData();
  }, [subjectId]);

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
      <FeedHeader
        subjectData={subjectData}
        $isScroll={isHeaderVisible}
        ref={headerRef}
      />
      <S.Container>
        <QuestionList subjectId={subjectId} isAnswer={isAnswer} />
      </S.Container>
    </>
  );
}
