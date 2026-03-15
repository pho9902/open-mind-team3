import * as S from "@/components/containers/Question/SkeletonQuestion/SkeletonQuestion.style";
import { Skeleton } from "@/components/common/Skeleton/Skeleton.style";

export default function SkeletonQuestion() {
  return (
    <S.Container>
      <Skeleton width="60%" />
      {Array.from({ length: 3 }).map((_, index) => (
        <S.ContentWrapper key={index}>
          <Skeleton $width="25%" />
          <Skeleton $width="20%" />
          <Skeleton $width="80%" className="titleSkeleton" />
          <S.AnswerContainer>
            <Skeleton $borderRadius="9999px" className="userImgSkeleton" />
            <S.AnswerWrapper>
              <Skeleton $width="30%" />
              <Skeleton $width="100%" $height="80px" />
            </S.AnswerWrapper>
          </S.AnswerContainer>
          <S.Line />
          <S.ButtonWrapper>
            <Skeleton $width="150px" $height="50px" />
            <Skeleton $width="150px" $height="50px" />
          </S.ButtonWrapper>
        </S.ContentWrapper>
      ))}
    </S.Container>
  );
}
