import { Link } from "react-router-dom";
import * as S from "@/pages/NotFoundPage/NotFoundPage.style";

export default function NotFoundPage() {
  return (
    <S.Container>
      <S.Image />
      <S.Title>요청하신 페이지를 찾을 수 없습니다.</S.Title>
      <S.Description>
        페이지 주소가 잘못 입력되었거나, 주소가 변경 또는 삭제되어
        <br /> 요청하신 페이지를 찾을 수 없습니다.
      </S.Description>
      <S.Description>서비스 이용에 불편을 드려 죄송합니다.</S.Description>
      <S.ButtonContainer>
        <S.HomeButton as={Link} to="/">
          홈으로 가기
        </S.HomeButton>
        <S.PrevButton onClick={() => window.history.back()}>
          이전 페이지
        </S.PrevButton>
      </S.ButtonContainer>
    </S.Container>
  );
}
