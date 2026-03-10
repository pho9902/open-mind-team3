import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;

  ${media.tablet`
    padding: 70px 0;
 `};
`;

export const EmptyImg = styled.img`
  width: 100%;
  max-width: 120px;

  ${media.tablet`
    max-width: 150px;
  `};
`;

export const Message = styled.p`
  margin-top: -8px;

  color: ${({ theme }) => theme.colors.brown20};
  ${({ theme }) => theme.typography.body2};
  font-weight: 500;
  text-align: center;

  & span {
    color: ${({ theme }) => theme.colors.brown30};
    font-weight: 700;
  }

  ${media.tablet`
    ${({ theme }) => theme.typography.body1};
    font-weight: 500;
    line-height: 30px;
  `};
`;
