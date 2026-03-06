import * as S from "./QuestionCount.style";
import { MessagesIcon } from "@/assets/icons/Icons";

export default function QuestionCount({ questions }) {
  return (
    <S.Container>
      <MessagesIcon size={24} />
      {questions.length === 0 ? (
        <S.CountText>아직 질문이 없습니다.</S.CountText>
      ) : (
        <S.CountText>{questions.length}개의 질문이 있습니다.</S.CountText>
      )}
    </S.Container>
  );
}
