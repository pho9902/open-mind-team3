import { formatDate } from "@/utils/formatDate";

import placeholderImage from "@/assets/img/user-placeholderImage.svg";

import * as S from "@/components/containers/Question/AnswerItem/AnswerItem.style";

export default function AnswerItem({ answer, subjectData }) {
  const { content, isRejected } = answer;

  return (
    <S.Container>
      <S.AnswerImage
        src={subjectData?.imageSource || placeholderImage}
        alt="답변자프로필이미지"
      />
      <S.AnswerContent>
        <S.AnswerProfile>
          <S.AnswerProfileName>
            {subjectData?.name || "사용자"}
          </S.AnswerProfileName>
          <S.AnswerProfileDate>
            {formatDate.relative(answer.createdAt)}
          </S.AnswerProfileDate>
        </S.AnswerProfile>
        <S.AnswerText $isRejected={isRejected}>
          {isRejected ? "답변거절" : content}
        </S.AnswerText>
      </S.AnswerContent>
    </S.Container>
  );
}
