import styled from "styled-components";

import BgImg from "@/assets/img/home-bg.svg";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100dvh;
  padding: 0 24px;
  position: relative;

  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 120%;

  @media (min-width: 768px) {
    background-size: 100%;
  }
`;
