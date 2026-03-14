import styled, { keyframes } from "styled-components";

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

export const Count = styled(SkeletonItem)`
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

export const Status = styled(SkeletonItem)`
  width: 30%;
`;

export const SubTitle = styled(SkeletonItem)`
  width: 20%;
`;

export const Title = styled(SkeletonItem)`
  width: 80%;
  margin-top: -29px;
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

export const Button = styled(SkeletonItem)`
  width: 150px;
  height: 50px;
`;
