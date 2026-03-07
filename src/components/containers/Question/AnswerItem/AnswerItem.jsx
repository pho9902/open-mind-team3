import * as S from "@/components/containers/Question/AnswerItem/AnswerItem.style";
import { getFormattedDate } from "@/utils/getFormattedDate";

export default function AnswerItem({ answer }) {
  const { content, isRejected } = answer;

  return (
    <S.Container>
      {/* Todo: 임시 이미지 링크입니다. 나중에 연결되면 이미지 src 변경 필요 */}
      <S.AnswerImage
        src="https://picsum.photos/600/600"
        alt="답변자프로필이미지"
      />
      <S.AnswerContent>
        <S.AnswerProfile>
          {/* Todo: 나중에 실제 답변자 이름으로 변경 필요 */}
          <S.AnswerProfileName>답변자이름</S.AnswerProfileName>
          <S.AnswerProfileDate>{getFormattedDate(answer)}</S.AnswerProfileDate>
        </S.AnswerProfile>
        <S.AnswerText $isRejected={isRejected}>
          {isRejected ? "답변거절" : content}
        </S.AnswerText>
      </S.AnswerContent>
    </S.Container>
  );
}
