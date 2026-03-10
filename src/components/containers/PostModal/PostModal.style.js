import styled from "styled-components";
import { media } from "@/styles/media";

import { TextArea } from "@/components/common/Input/Input.style";
import { BasicButton } from "@/components/common/Button/Button.style";

export const ModalContent = styled.form`
  position: relative;
  width: 327px;
  height: auto;
  padding: 40px;
  padding-bottom: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 24px;

  ${media.tablet`
    width: 612px;
    height: auto;
  `}
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typography.body1Actor};
  ${media.tablet`${({ theme }) => theme.typography.h3};`}
`;

export const CloseButton = styled.button`
  width: 22px;
  height: 22px;

  ${media.tablet`
    width: 28px;
    height: 28px;
    & > svg {
        width: 28px;
        height: 28px;
    }
  `}

  &:hover {
    & > svg {
      opacity: 0.5;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => theme.typography.body2Actor};
  margin-bottom: 12px;
`;

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 9999px;
`;

export const ProfileName = styled.span`
  ${({ theme }) => theme.typography.body3};
`;

export const TextAreaContent = styled(TextArea)`
  width: 100%;
  height: 358px;

  ${media.tablet`
    height: 180px;
  `}
`;

export const CharCount = styled.span`
  align-self: flex-end;
  margin-bottom: 8px;

  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ $isOver, theme }) =>
    $isOver ? theme.colors.red : theme.colors.brown30};
`;

export const ErrorMessage = styled.span`
  margin-top: 8px;
  padding-left: 4px;

  ${({ theme }) => theme.typography.caption1Actor};
  color: ${({ theme }) => theme.colors.red};
`;

export const SubmitButton = styled(BasicButton)`
  width: 100%;
  margin-top: 8px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.brown30};
    color: ${({ theme }) => theme.colors.gray10};
    cursor: not-allowed;
  }
`;
