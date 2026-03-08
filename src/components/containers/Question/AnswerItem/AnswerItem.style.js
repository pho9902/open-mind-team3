import styled from "styled-components";
import { media } from "@/styles/media";

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

// Todo: 답변 보여질 텍스트 줄 수 정해서 적용하기
export const AnswerText = styled.div`
  ${({ theme }) => theme.typography.body3};
  color: ${({ $isRejected, theme }) =>
    $isRejected ? theme.colors.red : theme.colors.gray60};
`;
