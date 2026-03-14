import styled, { keyframes } from "styled-components";
import { media } from "@/styles/media";

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const SkeletonItem = styled.div`
  width: 100%;
  height: ${(props) => props.height || 32}px;
  border-radius: 8px;

  background: linear-gradient(90deg, #eeeeee 25%, #e0e0e0 50%, #eeeeee 75%);
  background-size: 200% 100%;

  animation: ${shimmer} 3s infinite ease-in-out;
`;

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border: 1px solid ${({ theme }) => theme.colors.brown30};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.brown10};
`;

export const CountSkeleton = styled(SkeletonItem)`
  width: 60%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  background-color: ${({ theme }) => theme.colors.gray10};
  box-shadow: ${({ theme }) => theme.shadows.pt1};
`;

export const StatusSkeleton = styled(SkeletonItem)`
  width: 25%;
`;

export const SubTitleSkeleton = styled(SkeletonItem)`
  width: 20%;
`;

export const TitleSkeleton = styled(SkeletonItem)`
  width: 80%;
  margin-top: -29px;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const UserImgSkeleton = styled(SkeletonItem)`
  width: 32px;
  height: 32px;
  border-radius: 9999px;

  ${media.tablet`
    width: 48px;
    height: 48px;
  `}
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const UserInfoSkeleton = styled(SkeletonItem)`
  width: 30%;
`;

export const AnswerContent = styled(SkeletonItem)`
  width: 100%;
  height: 80px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray30};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const ButtonSkeleton = styled(SkeletonItem)`
  width: 150px;
  height: 50px;
`;
