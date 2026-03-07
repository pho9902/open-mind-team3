import * as S from "@/components/containers/Question/AnswerItem/AnswerItem.style";

export default function AnswerItem({ answer }) {
  const { id, content, isRejected, createdAt } = answer;
  return (
    <S.Container key={id}>
      <S.AnswerImage src alt="답변자프로필이미지" />
      <S.AnswerContent>
        <S.AnswerProfile>
          <S.AnswerProfileName>답변자이름</S.AnswerProfileName>
          <S.AnswerProfileDate>{createdAt}</S.AnswerProfileDate>
        </S.AnswerProfile>
        <S.AnswerText $isRejected>
          {isRejected ? "답변거절" : { content }}
        </S.AnswerText>
      </S.AnswerContent>
    </S.Container>
  );
}
