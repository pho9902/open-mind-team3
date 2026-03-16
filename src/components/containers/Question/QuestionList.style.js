import styled from "styled-components";
import { media } from "@/styles/media";
import { FloatingButton } from "@/components/common/Button/Button.style";
import { BasicButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 54px;
  margin-bottom: 126px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray20};

  ${media.tablet`
    padding: 0 32px;
  `}

  ${media.pc`
    padding: 0 240px;
  `}
`;

export const QuestionListWrapper = styled.div`
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

export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeleteFeedButton = styled(BasicButton)`
  position: absolute;
  top: -44px;
  right: 0;

  ${media.tablet`
    top: -60px;
  `}
`;

export const FloatingGroup = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  z-index: 10;
`;

export const FloatingButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  & span {
    display: none;
    background-color: ${({ theme }) => theme.colors.brown10};
    color: ${({ theme }) => theme.colors.brown40};
    border: 1px solid ${({ theme }) => theme.colors.brown30};
    padding: 6px 12px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadows.pt1};
  }

  &:hover {
    & span {
      display: block;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MenuButton = styled(FloatingButton)`
  padding: 12px 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  box-shadow: ${({ theme }) => theme.shadows.pt3};
  background-color: #8d7b68;
  opacity: 0.8;
`;

export const QuestionPostButton = styled(FloatingButton)`
  padding: 12px 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  box-shadow: ${({ theme }) => theme.shadows.pt3};
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  width: 100%;
`;
