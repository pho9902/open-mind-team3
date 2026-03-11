import { forwardRef } from "react";

import * as S from "./Input.style";
import { theme } from "@/styles/theme";

export const Input = forwardRef((props, ref) => (
  <S.InputContainer>
    <S.StyledInput {...props} ref={ref} />
  </S.InputContainer>
));

export const IconInput = forwardRef(
  (
    { leftIcon: LeftIcon, rightIcon: RightIcon, onRightClick, ...props },
    ref,
  ) => (
    <S.InputContainer>
      {LeftIcon && (
        <S.IconWrapper>
          <LeftIcon size={20} color={theme.colors.gray40} />
        </S.IconWrapper>
      )}
      <S.StyledInput {...props} ref={ref} />
      {RightIcon && (
        <S.IconWrapper
          onClick={onRightClick}
          style={{ cursor: onRightClick ? "pointer" : "default" }}
        >
          <RightIcon size={20} color={theme.colors.gray40} />
        </S.IconWrapper>
      )}
    </S.InputContainer>
  ),
);

export const CountInput = forwardRef(
  ({ leftIcon: LeftIcon, current, limit, ...props }, ref) => (
    <S.InputContainer>
      {LeftIcon && (
        <S.IconWrapper>
          <LeftIcon size={20} color={theme.colors.gray40} />
        </S.IconWrapper>
      )}
      <S.StyledInput {...props} maxLength={limit} ref={ref} />
      <S.InputCount>
        {current} / {limit}
      </S.InputCount>
    </S.InputContainer>
  ),
);
