import styled from "styled-components";

export const Container = styled.div`
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
`;

export const AnswerStatus = styled.div`
  height: 26px;
  padding: 4px 12px;

  border: 1px solid
    ${({ $isAnswer, theme }) =>
      !$isAnswer ? theme.colors.gray40 : theme.colors.brown40};
  border-radius: 8px;

  ${({ theme }) => theme.typography.caption1Medium};
  color: ${({ $isAnswer, theme }) =>
    !$isAnswer ? theme.colors.gray40 : theme.colors.brown40};
  background-color: ${({ theme }) => theme.colors.gray10};
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

export const ContentCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  ${({ theme }) => theme.typography.caption1Medium};
  color: ${({ theme }) => theme.colors.gray40};

  & span:first-child::after {
    content: "·";
    font-size: 14px;
    margin-left: 3px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.typography.body2Actor};
  color: ${({ theme }) => theme.colors.gray60};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: -8px;

  background-color: ${({ theme }) => theme.colors.gray30};
`;
