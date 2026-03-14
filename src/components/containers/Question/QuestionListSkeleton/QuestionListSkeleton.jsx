import * as S from "@/components/containers/Question/QuestionListSkeleton/QuestionListSkeleton.style";

export default function QuestionListSkeleton() {
  return (
    <S.Container>
      <S.Count />
      {Array.from({ length: 5 }).map((_, index) => (
        <S.ContentWrapper key={index}>
          <S.Status />
          <S.SubTitle />
          <S.Title />
          <S.Line />
          <S.ButtonWrapper>
            <S.Button />
            <S.Button />
          </S.ButtonWrapper>
        </S.ContentWrapper>
      ))}
    </S.Container>
  );
}
