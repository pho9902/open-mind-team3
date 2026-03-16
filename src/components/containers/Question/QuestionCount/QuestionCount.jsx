import { MessagesIcon } from "@/assets/icons/MessagesIcon";

import * as S from "@/components/containers/Question/QuestionCount/QuestionCount.style";

export default function QuestionCount({ totalCount }) {
  return (
    <S.Container>
      <MessagesIcon size={24} />
      <S.CountText>
        {totalCount === 0
          ? "아직 질문이 없습니다."
          : `${totalCount}개의 질문이 있습니다.`}
      </S.CountText>
    </S.Container>
  );
}
