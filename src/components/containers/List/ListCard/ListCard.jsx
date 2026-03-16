import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { subjectApi } from "@/apis/subject";

import { MessagesIcon } from "@/assets/icons/MessagesIcon";
import { LoadingSpinner } from "@/assets/icons/LoadingSpinnerIcon";
import userPlaceholderImage from "@/assets/img/user-placeholderImage.svg";

import SkeletonList from "@/components/containers/List/SkeletonList/SkeletonList";
import * as S from "@/components/containers/List/ListCard/ListCard.style";

export default function ListCard({ subject }) {
  const { name, imageSource, questionCount, id } = subject;
  const [isFront, setIsFront] = useState(true);
  const [questionContent, setQuestionContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();
  const handleMouseEnter = () => setIsFront(false);
  const handleMouseLeave = () => setIsFront(true);

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await subjectApi.getQuestions(id, 2, 0);
      setQuestionContent(response.results || []);
    } catch (e) {
      console.error("질문 로드 실패", e);
    } finally {
      setIsLoading(false);
      setIsFirstLoad(false);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, [id]);

  return (
    <S.CardContainer
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.CardInner $isFront={isFront}>
        <S.CardFront>
          <S.CardProfile>
            <S.SubjectImage
              src={imageSource ? imageSource : userPlaceholderImage}
            />
            <S.SubjectName>
              <span>{name}</span>
            </S.SubjectName>
          </S.CardProfile>
          <S.CardFooter>
            <S.QuestionLabel>
              <MessagesIcon />
              <span>질문하기</span>
            </S.QuestionLabel>
            <S.QuestionCount>{questionCount ?? 0}개</S.QuestionCount>
          </S.CardFooter>
        </S.CardFront>

        <S.CardBack>
          <S.QuestionContent>
            <h3>{name}님이 받은 질문</h3>

            {isFirstLoad ? (
              <SkeletonList />
            ) : isLoading ? (
              <LoadingSpinner />
            ) : questionContent.length > 0 ? (
              <S.QuestionList>
                {questionContent.map((q) => (
                  <S.QuestionItem key={q.id}>
                    {q.content}
                  </S.QuestionItem>
                ))}
              </S.QuestionList>
            ) : (
              <p>아직 받은 질문이 없습니다.</p>
            )}
          </S.QuestionContent>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
}
