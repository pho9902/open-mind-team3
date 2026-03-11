import styled from "styled-components";

import { media } from "@/styles/media";

export const BasicButton = styled.button`
  ${({ theme }) => theme.typography.caption1Regular}
  color: ${({ theme }) => theme.colors.gray10};
  background-color: ${({ theme }) => theme.colors.brown40};

  height: 34px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 2px solid transparent;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.brown50};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.brown50};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.brown30};
    cursor: not-allowed;
  }

  ${media.tablet`
    ${({ theme }) => theme.typography.body3}

    height: 46px;
    padding: 12px 24px;
  `}
`;

export const SecondButton = styled.button`
  ${({ theme }) => theme.typography.caption1Actor}
  color: ${({ theme }) => theme.colors.brown40};
  background-color: ${({ theme }) => theme.colors.brown10};

  height: 34px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.brown40};
  border-radius: 8px;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.brown40};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.brown20};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.brown10};
    border: 1px solid ${({ theme }) => theme.colors.brown30};

    cursor: not-allowed;
  }

  ${media.tablet`
    ${({ theme }) => theme.typography.body3Actor}

     height: 46px;
     padding: 12px 24px;
  `}
`;

export const FloatingButton = styled.button`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.colors.gray10};
  background-color: ${({ theme }) => theme.colors.brown40};

  height: 54px;
  padding: 12px 24px;
  border: 1px solid transparent;
  border-radius: 200px;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
