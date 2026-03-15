import { useState } from "react";

import { subjectApi } from "@/apis/subject";
import { openToast } from "@/utils/toast";

import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MessagesIcon } from "@/assets/icons/MessagesIcon";
import placeholderImage from "@/assets/img/user-placeholderImage.svg";

import * as S from "@/components/containers/PostModal/PostModal.style";
import Modal from "@/components/common/Modal/index";

const MAX_LENGTH = 30;

export default function PostModal({
  subjectId,
  subjectData,
  onClose,
  onSuccess,
}) {
  const [questionContent, setQuestionContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await subjectApi.createQuestion(subjectId, questionContent);
      if (onSuccess) onSuccess(); // 질문 생성 후 성공 콜백 호출
      onClose(); // 질문 생성 후 모달 닫기
    } catch (error) {
      console.error("질문 생성 실패:", error);
      openToast.error("질문 생성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleInputChange = (e) => {
    let { value } = e.target;

    if (value.length <= MAX_LENGTH) setQuestionContent(value);
  };

  /* 질문이 입력되지 않았거나 공백일 때 버튼 비활성화 */
  const isButtonDisabled = questionContent.trim().length === 0;

  return (
    <Modal setIsOpen={onClose}>
      <S.ModalContent onSubmit={handleSubmit}>
        <S.ModalHeader>
          <S.ModalTitle>
            <MessagesIcon size={28} />
            <S.Title>질문을 작성하세요</S.Title>
          </S.ModalTitle>
          <S.CloseButton onClick={onClose}>
            <CloseIcon size={22} />
          </S.CloseButton>
        </S.ModalHeader>

        <S.ProfileWrapper>
          <span>To.</span>
          <S.ProfileImage
            src={subjectData?.imageSource || placeholderImage}
            alt="질문자 이미지"
          />
          <S.ProfileName>{subjectData?.name || "프로필이름"}</S.ProfileName>
        </S.ProfileWrapper>

        <S.TextAreaContent
          type="text"
          placeholder="질문을 입력해주세요"
          value={questionContent}
          onChange={handleInputChange}
          maxLength={MAX_LENGTH}
          autoFocus
        />
        <S.CharCount $isOver={questionContent.length > MAX_LENGTH}>
          {questionContent.length}/{MAX_LENGTH}
        </S.CharCount>

        <S.SubmitButton type="submit" disabled={isButtonDisabled}>
          질문 보내기
        </S.SubmitButton>
      </S.ModalContent>
    </Modal>
  );
}
