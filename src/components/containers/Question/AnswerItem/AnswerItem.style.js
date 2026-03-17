import styled from "styled-components";

import { media } from "@/styles/media";
import { BasicButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const AnswerImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 9999px;

  ${media.tablet`
    width: 48px;
    height: 48px;
  `}
`;

export const AnswerContent = styled.div`
  flex-grow: 1;
`;

export const AnswerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

export const AnswerProfileName = styled.span`
  ${({ theme }) => theme.typography.caption1Actor};
  color: ${({ theme }) => theme.colors.gray60};

  ${media.tablet`
    ${({ theme }) => theme.typography.body2Actor};
  `}
`;

export const AnswerProfileDate = styled.span`
  ${({ theme }) => theme.typography.caption1Medium};
  color: ${({ theme }) => theme.colors.gray40};
`;

export const TextWrapper = styled.div`
  position: relative;
`;

export const AnswerText = styled.div`
  ${({ theme }) => theme.typography.body3};
  color: ${({ $isRejected, theme }) =>
    $isRejected ? theme.colors.red : theme.colors.gray60};
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $isExpanded }) => ($isExpanded ? "none" : 3)};
  overflow: hidden;
  word-break: break-word;
`;

export const MoreBtn = styled.span`
  ${({ theme }) => theme.typography.caption1Medium};
  color: ${({ theme }) => theme.colors.gray40};
  margin-top: 4px;
  cursor: pointer;
`;

export const FoldBtn = styled.span`
  margin-top: 4px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray40};
  cursor: pointer;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubmitButton = styled(BasicButton)`
  width: 100%;
`;
