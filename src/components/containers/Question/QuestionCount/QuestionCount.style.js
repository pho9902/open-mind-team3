import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.brown40};
`;

export const CountText = styled.p`
  ${({ theme }) => theme.typography.body2Actor};

  ${media.tablet`
    ${({ theme }) => theme.typography.body1Actor};
  `}
`;
