import * as S from "@/components/containers/Question/EmptyQuestion/EmptyQuestion.style";
import EmptyBox from "@/assets/img/question-emptyBox.svg";

export default function EmptyQuestion() {
  return (
    <S.Container>
      <S.EmptyImg src={EmptyBox} alt="비어있는피드이미지" />
      <S.Message>
        {/* Todo: 프로필 이름 API 연동 후 수정 */}
        <span>프로필이름</span>님에게 <br />첫 질문을 남겨보세요!
      </S.Message>
    </S.Container>
  );
}
