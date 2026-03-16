import { useScrollLock } from "@/hooks/useScrollLock";
import * as S from "./Modal.style";

export default function Modal({ setIsOpen, children }) {
  useScrollLock();

  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <S.ModalWrapper onClick={handleWrapperClick}>{children}</S.ModalWrapper>
  );
}
