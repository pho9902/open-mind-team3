import styled from "styled-components";
import { media } from "@/styles/media";
import { FloatingButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
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

export const QuestionPostButton = styled(FloatingButton)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  padding: 12px 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  box-shadow: ${({ theme }) => theme.shadows.pt3};

  & span {
    display: none;
  }

  &:hover {
    padding: 12px 24px;
    & span {
      display: inline;
    }
  }
`;
