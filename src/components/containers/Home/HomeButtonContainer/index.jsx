import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./HomeButtonContainer.style";
import { BasicButton } from "@/components/common/Button/Button.style";
import {
  DefaultDropdownButton,
  Dropdown,
} from "@/components/containers/Home/HomeDropdown/HomeDropdown";

export default function HomeButtonContainer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <S.ButtonContainer>
      <BasicButton as={Link} to="/list">
        질문하러 가기
      </BasicButton>

      {isDropdownOpen ? (
        <Dropdown onClick={handleDropdownButtonClick} />
      ) : (
        <DefaultDropdownButton onClick={handleDropdownButtonClick} />
      )}
    </S.ButtonContainer>
  );
}
