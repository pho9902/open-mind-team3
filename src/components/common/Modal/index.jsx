import * as S from "./Modal.style";

export default function Modal({ setIsOpen, children }) {
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <S.ModalWrapper onClick={handleWrapperClick}>{children}</S.ModalWrapper>
  );
}
