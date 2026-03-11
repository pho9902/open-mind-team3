import { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components";

import {
  CloseIcon,
  EditIcon,
  MoreIcon,
  RejectIcon,
} from "@/assets/icons/Icons";
import * as S from "./Kebab.style";

export default function Kebab() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const theme = useTheme();

  function handleToggle(e) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <S.KebabContainer ref={menuRef}>
      <S.KebabButton onClick={handleToggle}>
        <MoreIcon size={26} color={theme.colors.gray60} />
      </S.KebabButton>

      {isOpen && (
        <S.MenuWrapper>
          <S.MenuItem
            onClick={
              () =>
                console.log(
                  "수정",
                ) /* Todo: question id 따서 AnswerItem -> AnswerInput 으로 바꿔주기 */
            }
          >
            <EditIcon size={14} />
            수정하기
          </S.MenuItem>

          <S.MenuItem
            className="delete"
            onClick={
              () => console.log("삭제") /* Todo: Confirm 띄워서 기능 구현 */
            }
          >
            <CloseIcon size={14} />
            삭제하기
          </S.MenuItem>

          <S.MenuItem
            onClick={
              () => console.log("거절") /* Todo: Confirm 띄워서 기능 구현 */
            }
          >
            <RejectIcon size={14} />
            거절하기
          </S.MenuItem>
        </S.MenuWrapper>
      )}
    </S.KebabContainer>
  );
}
