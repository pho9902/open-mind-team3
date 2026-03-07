import * as S from "@/components/containers/List/ListPage.style";
import { SecondButton } from "@/components/common/Button/Button.style";
import { useNavigate } from "react-router-dom";
import LogoImg from "@/assets/img/LogoImg";

export default function ListHeader() {
  const navigate = useNavigate();
  const subjectId = localStorage.getItem("subjectId");
  const handleGoAnswer = () => {
    navigate(subjectId ? `/post/${subjectId}/answer` : "/");
  };
  return (
    <S.Header>
      <S.LogoWrapper  onClick={() => navigate("/")}>
        <LogoImg alt="OpenMind" />
      </S.LogoWrapper>
      {subjectId ? (
        <SecondButton onClick={handleGoAnswer}>답변하러 가기 →</SecondButton>
      ) : (
        <SecondButton onClick={handleGoAnswer}>
          피드 생성하기 →
        </SecondButton>
      )}
    </S.Header>
  );
}
