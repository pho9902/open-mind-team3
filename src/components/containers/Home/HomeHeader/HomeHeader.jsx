import { Link } from "react-router-dom";

import { ArrowRight2Icon } from "@/assets/icons/Icons";
import LogoImg from "@/assets/img/LogoImg";
import { SecondButton } from "@/components/common/Button";

import * as S from "./HomeHeader.style";

export default function HomeHeader() {
  return (
    <>
      <S.LogoContainer>
        <LogoImg />
      </S.LogoContainer>

      <S.HeaderSection>
        <SecondButton as={Link} to="/list">
          질문하러 가기
          <ArrowRight2Icon />
        </SecondButton>
      </S.HeaderSection>
    </>
  );
}
