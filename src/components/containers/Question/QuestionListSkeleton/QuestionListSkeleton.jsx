import * as S from "@/components/containers/Question/QuestionListSkeleton/QuestionListSkeleton.style";

export default function QuestionListSkeleton() {
  return (
    <S.Container>
      <S.CountSkeleton />
      {Array.from({ length: 3 }).map((_, index) => (
        <S.ContentWrapper key={index}>
          <S.StatusSkeleton />
          <S.SubTitleSkeleton />
          <S.TitleSkeleton />
          <S.AnswerContainer>
            <S.UserImgSkeleton />
            <S.AnswerWrapper>
              <S.UserInfoSkeleton />
              <S.AnswerContent />
            </S.AnswerWrapper>
          </S.AnswerContainer>
          <S.Line />
          <S.ButtonWrapper>
            <S.ButtonSkeleton />
            <S.ButtonSkeleton />
          </S.ButtonWrapper>
        </S.ContentWrapper>
      ))}
    </S.Container>
  );
}
