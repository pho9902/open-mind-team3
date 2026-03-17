import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { subjectApi } from "@/apis/subject";

import { MessagesIcon } from "@/assets/icons/MessagesIcon";
import { LoadingSpinner } from "@/assets/icons/LoadingSpinnerIcon";
import userPlaceholderImage from "@/assets/img/user-placeholderImage.svg";
import { openToast } from "@/utils/toast";

import * as S from "@/components/containers/List/ListCard/ListCard.style";

export default function ListCard({ subject }) {
  const { name, imageSource, questionCount, id } = subject;

  const [questionContent, setQuestionContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await subjectApi.getQuestions(id, 2, 0);
      setQuestionContent(response.results || []);
    } catch (e) {
      openToast("질문을 불러오는 데 실패했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [id]);

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.CardInner>
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

            {isLoading && (
              <S.SpinnerWrapper>
                <LoadingSpinner />
              </S.SpinnerWrapper>
            )}

            {!isLoading && questionContent.length > 0 && (
              <S.QuestionList>
                {questionContent.map((q) => (
                  <S.QuestionItem key={q.id}>{q.content}</S.QuestionItem>
                ))}
              </S.QuestionList>
            )}

            {!isLoading && questionContent.length === 0 && (
              <p style={{ textAlign: "left" }}>받은 질문이 없습니다.</p>
            )}
          </S.QuestionContent>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
}