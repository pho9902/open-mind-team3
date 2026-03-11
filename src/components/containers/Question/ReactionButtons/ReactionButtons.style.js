import styled from "styled-components";
import { SecondButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const ReactionButton = styled(SecondButton)`
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  gap: 16px;
  color: ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.gray10};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.gray10};
    background-color: ${({ theme }) => theme.colors.blue};
    box-shadow: none;

    ${({ $variant, theme }) =>
      $variant === "dislike" &&
      `
        border: 1px solid ${theme.colors.red};
        background-color: ${theme.colors.red};
      `}
  }
`;

export const ReactionCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
