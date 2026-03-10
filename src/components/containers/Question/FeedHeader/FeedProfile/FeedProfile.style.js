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

      ${ProfileContent} {
        flex-direction: row;

        &:hover {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }

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
`}
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
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

export const ShareButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & button {
    cursor: pointer;
    transition:
      transform 0.15s ease,
      opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const MobileShareButton = styled.button`
  display: none;
`;

export const ShareDropdown = styled.div`
  // 스크롤 안 했을 때
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;

  // 스크롤 했을 때
  ${({ $isScroll, $isOpen }) =>
    $isScroll &&
    css`
      display: ${$isOpen ? "flex" : "none"};
      flex-direction: column;
      position: absolute;
      top: 55px;
      right: -7px;
      z-index: 100;

      ${media.tablet`
        display: flex;
        position: static;
        flex-direction: row;
      `};
    `}
`;
