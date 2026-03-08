import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 44px;
  padding: 8px 12px;

  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray10};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.brown40};
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;

  border: none;
  outline: none;
  background: transparent;

  ${({ theme }) => theme.typography.body3};
  color: ${({ theme }) => theme.colors.gray50};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.gray40};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

export const InputCount = styled.span`
  margin-left: auto;
  padding-left: 8px;
  flex-shrink: 0;
  white-space: nowrap;

  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ theme }) => theme.colors.gray40};
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 20px;
  resize: none;

  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;

  background-color: ${({ theme }) => theme.colors.gray20};
  ${({ theme }) => theme.typography.body3};
  color: ${({ theme }) => theme.colors.gray60};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.brown40};
  }
`;
