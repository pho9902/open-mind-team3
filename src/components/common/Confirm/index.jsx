import Modal from "@/components/common/Modal";
import * as S from "./Confirm.style";

export default function Confirm({ header, description, onConfirm, setIsOpen }) {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    setIsOpen(false);
  };

  return (
    <Modal>
      <S.ContentBox>
        <S.ConfirmHeader>{header}</S.ConfirmHeader>
        <S.ConfirmDescription>{description}</S.ConfirmDescription>
        <S.ButtonWrapper>
          <S.CancelButton onClick={() => setIsOpen(false)}>취소</S.CancelButton>
          <S.ConfirmButton onClick={() => handleConfirm()}>
            확인
          </S.ConfirmButton>
        </S.ButtonWrapper>
      </S.ContentBox>
    </Modal>
  );
}
