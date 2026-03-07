import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isRight }) => ($isRight ? "right: 16px;" : "left: 16px;")}

  pointer-events: ${({ $isRight }) => ($isRight ? "auto" : "none")};
  cursor: ${({ $isRight }) => ($isRight ? "pointer" : "default")};
`;

export const StyledInput = styled.input`
  ${({ theme }) => theme.typography.body3}

  width: 100%;
  height: 46px;

  padding-left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? "44px" : "16px")};
  padding-right: ${({ $hasRightIcon }) => ($hasRightIcon ? "44px" : "16px")};

  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.brown40};
  }
`;
