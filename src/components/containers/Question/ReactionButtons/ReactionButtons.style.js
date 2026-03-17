import styled, { css } from "styled-components";
import { BasicButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const LikeWrapper = styled.div`
  position: relative;
`;

export const ThumbsUpEffect = styled.div`
  height: 32px;
  padding: 8px 12px;
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 4px;

  pointer-events: none;
  animation: thumbsUpEffect 2s ease-out forwards;

  background-color: ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.shadows.pt1};
  border-radius: 16px;

  ${({ theme }) => theme.typography.caption1Medium};
  color: ${({ theme }) => theme.colors.gray10};

  @keyframes thumbsUpEffect {
    0% {
      transform: translate(-50%, 10px) translateY(0) scale(1);
      opacity: 1;
    }
    70% {
      transform: translate(-50%, -40px) scale(1.5);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -80px) scale(2);
      opacity: 0;
    }
  }
`;

export const ReactionButton = styled(BasicButton)`
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  gap: 16px;
  color: ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray10};

  ${({ $isDislikeClicked, $variant }) =>
    $isDislikeClicked &&
    $variant === "dislike" &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.gray10};
    `}

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.gray10};
    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: none;

    ${({ $variant, theme }) =>
      $variant === "dislike" &&
      css`
        border: 1px solid ${theme.colors.red};
        background-color: ${theme.colors.red};
      `}
  }

  &:active {
    transform: translateY(2px);
    box-shadow: ${({ theme }) => theme.shadows.pt1};
  }
`;

export const ReactionCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
`;
