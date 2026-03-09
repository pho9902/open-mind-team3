import styled from "styled-components";

import { media } from "@/styles/media";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 248px;
  margin-top: 80px;
  margin-bottom: 24px;

  ${media.tablet`
    max-width: 456px;
    margin-bottom: 40px;
  `}
`;