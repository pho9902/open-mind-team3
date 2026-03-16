import { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components";

import { MoreIcon } from "@/assets/icons/MoreIcon";
import { EditIcon } from "@/assets/icons/EditIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { RejectIcon } from "@/assets/icons/RejectIcon";
import { answerApi } from "@/apis/answer";
import { questionApi } from "@/apis/question";

import * as S from "./Kebab.style";
import { openToast } from "@/utils/toast";
import Confirm from "@/components/common/Confirm";

export default function Kebab({
  question,
  answer,
  fetchQuestions,
  setIsEditing,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rejectConfirmOpen, setRejectConfirmOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const menuRef = useRef(null);
  const theme = useTheme();

  function handleToggle(e) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  async function handleRejectButton() {
    if (!question) return;

    try {
      let targetAnswerId = answer?.id;
      // 답변이 없는경우 더미 답변 생성 후 개별조회
      if (!targetAnswerId) {
        await questionApi.createAnswer(question.id, "거절용 더미 답변");
        const response = await questionApi.getQuestion(question.id);
        targetAnswerId = response.answer.id;
      }

      if (targetAnswerId) {
        await answerApi.rejectAnswer(targetAnswerId);
        openToast.success("답변을 거절했습니다.");
        fetchQuestions();
      } else {
        throw new Error();
      }
    } catch {
      openToast.error("답변 거절에 실패했습니다. 다시 시도해 주세요");
    }
  }

  async function handleDeleteButton() {
    if (!question) return;

    try {
      await questionApi.deleteQuestion(question.id);
      openToast.success("질문을 삭제했습니다.");
      fetchQuestions();
    } catch {
      openToast.error("질문 삭제에 실패했습니다. 다시 시도해 주세요");
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
          {answer && !answer.isRejected && (
            <S.MenuItem
              onClick={() => {
                setIsEditing(true);
                setIsOpen(false);
              }}
            >
              <EditIcon size={14} />
              수정하기
            </S.MenuItem>
          )}

          <S.MenuItem
            className="delete"
            onClick={() => setDeleteConfirmOpen(true)}
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
      {deleteConfirmOpen && (
        <Confirm
          header="질문을 삭제하시겠습니까?"
          description="질문을 삭제하면 다시 답변 할 수 없고, 작성한 답변도 삭제됩니다."
          onConfirm={handleDeleteButton}
          setIsOpen={setDeleteConfirmOpen}
        />
      )}
    </S.KebabContainer>
  );
}
