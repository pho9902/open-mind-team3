import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MessagesIcon } from "@/assets/icons/MessagesIcon";
import { subjectApi } from "@/apis/subject";
import userPlaceholderImage from "@/assets/img/user-placeholderImage.svg";

import * as S from "@/components/containers/List/ListCard/ListCard.style";

export default function ListCard({ subject }) {
  const { name, imageSource, questionCount, id } = subject;
  const [isFront, setIsFront] = useState(true);
  const [questionContent, setQuestionContent] = useState(
    `${name}님이 받은 질문 불러오는 중...`,
  );
  const navigate = useNavigate();
  const handleMouseEnter = () => setIsFront(false);
  const handleMouseLeave = () => setIsFront(true);

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  // useEffect(async () => {
  //   const response = await subjectApi.getQuestion(id,2,0);
  // }, []);

  return (
    <S.CardContainer
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.CardInner $isFront={isFront}>
        <S.CardFront>
          <S.CardProfile>
            {imageSource ? (
              <S.SubjectImage src={imageSource} />
            ) : (
              <S.SubjectImage src={userPlaceholderImage} />
            )}
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
          <S.QuestionContent>{questionContent}</S.QuestionContent>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
}
