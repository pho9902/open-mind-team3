import { useNavigate } from "react-router-dom";

import * as S from "@/components/containers/List/ListHeader/ListHeader.style";
import { SecondButton } from "@/components/common/Button/Button.style";
import LogoImg from "@/assets/img/LogoImg";
import { ArrowRight2Icon } from "@/assets/icons/ArrowRight2Icon";
import { STORAGE } from "@/constants";

export default function ListHeader() {
  const navigate = useNavigate();
  const myFeedId = localStorage.getItem(STORAGE.FEED_ID);
  const handleAuthNavigation = () => {
    navigate(myFeedId ? `/post/${myFeedId}/answer` : "/");
  };
  return (
    <S.Header>
      <S.LogoWrapper onClick={() => navigate("/")}>
        <LogoImg />
      </S.LogoWrapper>
      <SecondButton onClick={handleAuthNavigation}>
        {myFeedId ? "답변하러 가기" : "피드 생성하기"}
        <ArrowRight2Icon width="18px" height="18px" />
      </SecondButton>
    </S.Header>
  );
}
