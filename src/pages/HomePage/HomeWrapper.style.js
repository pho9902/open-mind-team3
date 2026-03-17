import styled from "styled-components";

import { media } from "@/styles/media";
import BgImg from "@/assets/img/home-bg.svg";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 24px 200px;
  position: relative;

  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 120%;

  ${media.tablet`
    background-size:100% ;
    min-height:100dvh
  `}
`;
