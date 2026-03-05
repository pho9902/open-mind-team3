import styled from "styled-components";
import { theme } from "@/styles/theme";

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
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

const StyledInput = styled.input`
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

/**
 * @component BasicInput
 * @description 아이콘(왼쪽/오른쪽)을 포함할 수 있는 공통 입력창 컴포넌트입니다.
 * * @param {React.ElementType} [leftIcon] - 왼쪽에 표시할 아이콘 컴포넌트
 * @param {React.ElementType} [rightIcon] - 오른쪽에 표시할 아이콘 컴포넌트
 * @param {function} [onRightIconClick] - 오른쪽 아이콘 클릭 시 실행될 함수 (예: 비밀번호 보기)
 * @param {string} [iconColor] - 아이콘의 색상 (기본값: theme.colors.gray40)
 * * @example
 * // 1. 기본 사용
 * <BasicInput placeholder="이름을 입력하세요" />
 * * // 2. 왼쪽 아이콘 포함
 * <BasicInput leftIcon={PersonIcon} placeholder="아이디" />
 * * // 3. 비밀번호 입력창 (오른쪽 아이콘 클릭 포함)
 * <BasicInput
 * type="password"
 * rightIcon={EyeIcon}
 * onRightIconClick={() => console.log('비밀번호 보기')}
 * />
 */
export const Input = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconClick,
  iconColor,
  iconSize,
  ...props
}) => {
  const defaultColor = iconColor || theme.colors.gray40;
  const defaultSize = iconSize || 20;

  return (
    <InputContainer>
      {/* 왼쪽 아이콘 */}
      {LeftIcon && (
        <IconWrapper>
          <LeftIcon size={defaultSize} color={defaultColor} />
        </IconWrapper>
      )}

      <StyledInput
        $hasLeftIcon={!!LeftIcon}
        $hasRightIcon={!!RightIcon}
        {...props}
      />

      {/* 오른쪽 아이콘 */}
      {RightIcon && (
        <IconWrapper $isRight onClick={onRightIconClick}>
          <RightIcon size={defaultSize} color={defaultColor} />
        </IconWrapper>
      )}
    </InputContainer>
  );
};

export const TextArea = styled.textarea`
  ${({ theme }) => theme.typography.body3}
  color: ${({ theme }) => theme.colors.gray60};
  background-color: ${({ theme }) => theme.colors.gray20};

  width: 100%;
  min-height: 140px;
  padding: 20px;

  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.brown40};
  }
`;
