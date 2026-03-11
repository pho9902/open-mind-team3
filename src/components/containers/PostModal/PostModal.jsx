import { useState } from "react";

import { postQuestions } from "@/apis/questions";
import { openToast } from "@/utils/toast";

import Modal from "@/components/common/Modal/index";
import { CloseIcon, MessagesIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/PostModal/PostModal.style";

const MAX_LENGTH = 20;

export default function PostModal({ subjectId, onClose, onSuccess }) {
  const [questionContent, setQuestionContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postQuestions(subjectId, questionContent);
      if (onSuccess) onSuccess(); // 질문 생성 후 성공 콜백 호출
      onClose(); // 질문 생성 후 모달 닫기
    } catch (error) {
      console.error("질문 생성 실패:", error);
      openToast("질문 생성에 실패했습니다. 다시 시도해주세요.", "#FF0000");
    }
  };

  const handleInputChange = (e) => {
    let { value } = e.target;

    if (value.length > MAX_LENGTH) {
      value = value.slice(0, MAX_LENGTH);
    }
    setQuestionContent(value);
  };
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
          {/* Todo: api에서 질문 대상자 정보 받아오기 */}
          <S.ProfileImage
            src="https://picsum.photos/600/600"
            alt="질문자 이미지"
          />
          <S.ProfileName>프로필이름</S.ProfileName>
        </S.ProfileWrapper>

        <S.TextAreaContent
          type="text"
          placeholder="질문을 입력해주세요"
          value={questionContent}
          onChange={handleInputChange}
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
