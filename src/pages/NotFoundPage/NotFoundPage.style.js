import styled from "styled-components";
import { media } from "@/styles/media";
import notFound from "@/assets/img/notFound-bg.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.gray20};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;

  ${media.tablet`
    min-height: 90vh;
  `}
`;

export const Image = styled.div`
  width: 100%;
  height: 234px;
  margin-bottom: 62px;

  background-image: url(${notFound});
  background-size: max(100%, 1200px) auto;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.h2};
  font-weight: 700;

  ${media.tablet`
    ${({ theme }) => theme.typography.h1};
    font-weight: 700;
  `};
`;

export const Description = styled.p`
  white-space: pre-wrap;
  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ theme }) => theme.colors.gray50};
  text-align: center;

  ${media.tablet`
   ${({ theme }) => theme.typography.body3};`}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typography.body3Actor};
  height: 46px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid transparent;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const HomeButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray60};
  color: ${({ theme }) => theme.colors.gray10};
`;

export const PrevButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray50};
  border: 1px solid ${({ theme }) => theme.colors.gray50};
`;
