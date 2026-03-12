import { useEffect, useRef } from "react";

import * as S from "./HomeDropdown.style";
import { useCreateFeed } from "@/hooks/useCreateFeed";

import { ArrowUpIcon } from "@/assets/icons/ArrowUpIcon";
import { PersonIcon } from "@/assets/icons/PersonIcon";
import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";
import { CountInput } from "@/components/common/Input/Input";
import { BasicButton } from "@/components/common/Button/Button.style";

export const DefaultDropdownButton = ({ onClick }) => (
  <S.DropdownButton type="button" onClick={onClick}>
    <span>피드 만들기</span>
    <ArrowDownIcon />
  </S.DropdownButton>
);

const INPUT_LIMIT = 12;

export const Dropdown = ({ onClick }) => {
  const inputRef = useRef(null);
  const {
    input,
    errorMessage,
    pending,
    handleInputChange,
    submitFeed,
    isInputEmpty,
  } = useCreateFeed();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    submitFeed(input);
  };

  return (
    <S.DropdownForm onSubmit={handleSubmit}>
      <S.DropdownHeader type="button" as="div" onClick={onClick}>
        <span>피드 만들기</span>
        <ArrowUpIcon />
      </S.DropdownHeader>

      <S.InputWrapper>
        <CountInput
          ref={inputRef}
          leftIcon={PersonIcon}
          current={input.length}
          limit={INPUT_LIMIT}
          value={input}
          onChange={(e) => handleInputChange(e, INPUT_LIMIT)}
          placeholder="이름을 입력하세요"
        />
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.InputWrapper>

      <S.InputButtonWrapper>
        <BasicButton type="submit" disabled={isInputEmpty || pending}>
          확인
        </BasicButton>
      </S.InputButtonWrapper>
    </S.DropdownForm>
  );
};
