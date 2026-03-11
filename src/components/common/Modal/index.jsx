import * as S from "./Modal.style";

export default function Modal({ setIsOpen, children }) {
  return <S.ModalWrapper>{children}</S.ModalWrapper>;
}
