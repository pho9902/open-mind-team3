import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./HomeDropdown.style";
import { createFeed } from "@/apis/subject";
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
  const navigate = useNavigate();

  const isInputEmpty = input.trim().length === 0;

  const handleCreateFeed = async (inputName) => {
    try {
      const data = await createFeed(inputName);
      localStorage.setItem("feedId", data.id);

      navigate(`/post/${data.id}/answer`);
    } catch (error) {
      setErrorMessage("피드 생성에 실패했어요. 다시 시도해 주세요.");
      console.error(error);
    }
  };

  const handleDropdownFormSubmit = async (e) => {
    e.preventDefault();

    const result = validateName(input);

    if (!result.isValid) {
      setErrorMessage(result.message);
      return;
    }

    await handleCreateFeed(input);
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
        <BasicButton type="submit" disabled={isInputEmpty}>
          확인
        </BasicButton>
      </S.InputButtonWrapper>
    </S.DropdownForm>
  );
};
