import styled from "styled-components";

import { media } from "@/styles/media";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  max-width: 305px;
  padding: 32px;

  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 16px;

  ${media.tablet`
   max-width: 456px;
    padding: 40px;
 `}
`;
