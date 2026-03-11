import styled, { css } from "styled-components";
import { media } from "@/styles/media";

export const ShareButtons = styled.div`
  position: relative;
`;

export const MobileShareButton = styled.button`
  display: none;

  ${({ $isScroll }) =>
    $isScroll &&
    css`
      display: block;

      ${media.tablet`
        display: none;
      `};
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
  `};

  ${({ $isScroll }) =>
    !$isScroll &&
    css`
      display: flex;
    `};
`;
