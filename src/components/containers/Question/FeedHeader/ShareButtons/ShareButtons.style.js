import styled, { css } from "styled-components";
import { media } from "@/styles/media";

export const ShareButtons = styled.div`
  position: relative;

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

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      display: block;

      ${media.tablet`
        display: none;
      `}
    `};
`;

export const ShareDropdown = styled.div`
  position: absolute;
  top: 55px;
  right: -7px;
  z-index: 100;

  ${media.tablet`
    display: none;
  `};
`;

export const PcShareButtons = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
  `}

  ${({ $isScroll }) =>
    !$isScroll &&
    css`
      display: flex;
    `};
`;

export const ShareListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      flex-direction: column;

      ${media.tablet`
        flex-direction: row;
        position: static;
      `};
    `};
`;
