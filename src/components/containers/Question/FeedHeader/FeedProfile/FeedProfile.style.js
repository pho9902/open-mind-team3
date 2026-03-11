import styled, { css } from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      ${ProfileImage} {
        display: none;

        ${media.tablet`
          display: block;
          width: 48px;
          height: 48px;
        `};
      }

      ${ProfileName} {
        ${({ theme }) => theme.typography.body1};

        ${media.tablet`
          ${({ theme }) => theme.typography.h3};
        `};
      }
    `};
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: ${({ $isScroll }) => ($isScroll ? "row" : "column")};
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ProfileImage = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 9999px;

  ${media.tablet`
    width: 136px;
    height: 136px;
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => theme.typography.h3};

  ${media.tablet`
    ${({ theme }) => theme.typography.h2};
  `}
`;
