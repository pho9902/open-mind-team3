import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border: 1px solid ${({ theme }) => theme.colors.brown30};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.brown10};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  background-color: ${({ theme }) => theme.colors.gray10};
  box-shadow: ${({ theme }) => theme.shadows.pt1};

  .titleSkeleton {
    margin-top: -29px;
  }

  .userImgSkeleton {
    width: 32px;
    height: 32px;

    ${media.tablet`
    width: 48px;
    height: 48px;
  `}
  }
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray30};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
