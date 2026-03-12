import { useNavigate } from "react-router-dom";

import * as S from "@/components/containers/List/ListHeader/ListHeader.style";
import { SecondButton } from "@/components/common/Button/Button.style";

export default function ListHeader() {
  const navigate = useNavigate();
  const myFeedId = localStorage.getItem("myFeedId");
  const handleAuthNavigation = () => {
    navigate(myFeedId ? `/post/${myFeedId}/answer` : "/");
  };
  return (
    <S.Header>
      <S.LogoWrapper onClick={() => navigate("/")}>
        <LogoImg alt="OpenMind" />
      </S.LogoWrapper>
      {myFeedId ? (
        <SecondButton onClick={handleAuthNavigation}>답변하러 가기<ArrowRight2Icon width="18px" height="18px"/></SecondButton>
      ) : (
        <SecondButton onClick={handleAuthNavigation}>피드 생성하기<ArrowRight2Icon width="18px" height="18px"/></SecondButton>
      )}
    </S.Header>
  );
}
