import styled, { css } from "styled-components";
import { media } from "@/styles/media";

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

  // 버튼 스타일
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
