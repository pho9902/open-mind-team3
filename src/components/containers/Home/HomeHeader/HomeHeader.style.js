import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 248px;
  margin-top: 80px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 456px;
    margin-top: 160px;
    margin-bottom: 40px;
  }
`;

export const HeaderSection = styled.div`
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
