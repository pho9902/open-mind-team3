import styled, { keyframes } from "styled-components";

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

export const Count = styled.div`
  width: 50%;
  height: 32px;
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
`;

export const Status = styled.div`
  width: 20%;
  height: 32px;
`;

export const SubTitle = styled.div`
  width: 20%;
  height: 32px;
`;

export const Title = styled.div`
  width: 80%;
  height: 32px;
  margin-top: -29px;
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

export const Button = styled.div`
  width: 150px;
  height: 50px;
`;
