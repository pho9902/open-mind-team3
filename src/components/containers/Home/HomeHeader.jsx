import { Link } from "react-router-dom";
import styled from "styled-components";

import { ArrowRight2Icon } from "@/assets/icons/Icons";
import LogoImg from "@/assets/img/logo.svg";
import { SecondButton } from "@/components/common/Button";

export default function HomeHeader() {
  return (
    <>
      <LogoContainer>
        <img src={LogoImg} alt="OpenMind Logo" />
      </LogoContainer>

      <HeaderSection>
        <SecondButton as={Link} to="/list">
          질문하러 가기
          <ArrowRight2Icon />
        </SecondButton>
      </HeaderSection>
    </>
  );
}

const LogoContainer = styled.div`
  width: 100%;
  max-width: 248px;
  margin-top: 80px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 456px;
    margin-top: 160px;
    margin-bottom: 40px;
  }
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 50px;
    width: auto;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    right: 150px;
  }
`;
