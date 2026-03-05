import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 189px;
  background-color: ${({ theme }) => theme.colors.gray20};
`;

export const QuestionListWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.brown30};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.brown10};
`;
