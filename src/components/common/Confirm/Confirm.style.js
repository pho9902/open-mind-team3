import styled from "styled-components";
import {
  BasicButton,
  SecondButton,
} from "@/components/common/Button/Button.style";

export const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray10};
  width: 434px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  gap: 16px;
`;

export const ConfirmHeader = styled.div`
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.gray60};
  font-weight: 700;
  margin: 0;
`;

export const ConfirmDescription = styled.p`
  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ theme }) => theme.colors.gray50};
  margin: 0;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 0 40px;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const ConfirmButton = styled(BasicButton)`
  background-color: ${({ theme }) => theme.colors.red};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.red};
    filter: brightness(0.9);
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.red};
    filter: brightness(0.8);
  }
`;

export const CancelButton = styled(SecondButton)`
  color: ${({ theme }) => theme.colors.gray60};
  background-color: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray60};
`;
