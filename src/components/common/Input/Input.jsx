import * as S from "./Input.style";
import { theme } from "@/styles/theme";

export const Input = (props) => (
  <S.InputContainer>
    <S.StyledInput {...props} />
  </S.InputContainer>
);

export const IconInput = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightClick,
  ...props
}) => (
  <S.InputContainer>
    {LeftIcon && (
      <S.IconWrapper>
        <LeftIcon size={20} color={theme.colors.gray40} />
      </S.IconWrapper>
    )}
    <S.StyledInput {...props} />
    {RightIcon && (
      <S.IconWrapper onClick={onRightClick}>
        <RightIcon size={20} color={theme.colors.gray40} />
      </S.IconWrapper>
    )}
  </S.InputContainer>
);

export const CountInput = ({
  leftIcon: LeftIcon,
  current,
  limit,
  ...props
}) => (
  <S.InputContainer>
    {LeftIcon && (
      <S.IconWrapper>
        <LeftIcon size={20} color={theme.colors.gray40} />
      </S.IconWrapper>
    )}
    <S.StyledInput {...props} maxLength={limit} />
    <S.InputCount>
      {current} / {limit}
    </S.InputCount>
  </S.InputContainer>
);
