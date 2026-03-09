import { useState } from "react";

import * as S from "./HomeDropdown.style";
import { validateName } from "@/utils/validation";
import { ArrowDownIcon, ArrowUpIcon, PersonIcon } from "@/assets/icons/Icons";
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
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDropdownFormSubmit = (e) => {
    e.preventDefault();

    const result = validateName(input);

    if (!result.isValid) {
      setErrorMessage(result.message);
      return;
    }

    // TODO: 성공시 api 요청 후 리다이렉트
    console.log("성공 테스트");
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (value.length <= INPUT_LIMIT) {
      setInput(value);
    }
  };

  return (
    <S.DropdownForm onSubmit={handleDropdownFormSubmit}>
      <S.DropdownHeader type="button" as="div" onClick={onClick}>
        <span>피드 만들기</span>
        <ArrowUpIcon />
      </S.DropdownHeader>

      <S.InputWrapper>
        <CountInput
          leftIcon={PersonIcon}
          current={input.length}
          limit={INPUT_LIMIT}
          value={input}
          onChange={handleInputChange}
          placeholder="이름을 입력하세요"
        />
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.InputWrapper>

      <S.InputButtonWrapper>
        <BasicButton type="submit">확인</BasicButton>
      </S.InputButtonWrapper>
    </S.DropdownForm>
  );
};
