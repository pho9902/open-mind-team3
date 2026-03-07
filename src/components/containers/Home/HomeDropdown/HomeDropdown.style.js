import styled from "styled-components";

import { SecondButton } from "@/components/common/Button/Button.style";

export const DropdownButton = styled(SecondButton)`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const DropdownForm = styled.form`
  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.brown40};
  border-radius: 8px;

  padding-bottom: 8px;
`;

export const DropdownHeader = styled(DropdownButton)`
  border: none;
  background-color: inherit;

  &:hover {
    border: none;
    box-shadow: none;
  }

  &:active {
    border: none;
    box-shadow: none;
    background-color: inherit;
  }
`;

export const InputWrapper = styled.div`
  padding: 0 8px 8px;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 8px 8px;
`;
