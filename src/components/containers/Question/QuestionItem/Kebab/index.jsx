import { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components";

import { MoreIcon } from "@/assets/icons/MoreIcon";
import { EditIcon } from "@/assets/icons/EditIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { RejectIcon } from "@/assets/icons/RejectIcon";
import { answerApi } from "@/apis/answer";

import * as S from "./Kebab.style";
import { openToast } from "@/utils/toast";
import Confirm from "@/components/common/Confirm";

export default function Kebab({ answer, fetchQuestions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rejectConfirmOpen, setRejectConfirmOpen] = useState(false);
  const menuRef = useRef(null);
  const theme = useTheme();

  function handleToggle(e) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  async function handleRejectButton() {
    if (!answer) return;

    try {
      await answerApi.rejectAnswer(answer.id);
      openToast("답변을 거절했습니다.");
      fetchQuestions();
    } catch {
      openToast("답변 거절에 실패했습니다. 다시 시도해 주세요");
    }
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

          <S.MenuItem onClick={() => setRejectConfirmOpen(true)}>
            <RejectIcon size={14} />
            거절하기
          </S.MenuItem>
        </S.MenuWrapper>
      )}
      {rejectConfirmOpen && (
        <Confirm
          header="답변을 거절하시겠습니까?"
          description="답변을 거절하면 다시 답변을 작성 할 수 없습니다."
          onConfirm={handleRejectButton}
          setIsOpen={setRejectConfirmOpen}
        />
      )}
    </S.KebabContainer>
  );
}
