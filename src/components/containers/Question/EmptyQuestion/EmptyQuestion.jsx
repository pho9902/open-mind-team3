import * as S from "@/components/containers/Question/EmptyQuestion/EmptyQuestion.style";
import EmptyBox from "@/assets/img/question-emptyBox.svg";

export default function EmptyQuestion({ subjectData }) {
  return (
    <S.Container>
      <S.EmptyImg src={EmptyBox} alt="비어있는피드이미지" />
      <S.Message>
        <span>{subjectData?.name || "사용자"}</span>님에게 <br />첫 질문을
        남겨보세요!
      </S.Message>
    </S.Container>
  );
}
