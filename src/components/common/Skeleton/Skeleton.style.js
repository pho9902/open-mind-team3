import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const Skeleton = styled.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "32px"};
  border-radius: ${(props) => props.$borderRadius || "8px"};

  background: linear-gradient(90deg, #eeeeee 25%, #e0e0e0 50%, #eeeeee 75%);
  background-size: 200% 100%;

  animation: ${shimmer} 3s infinite ease-in-out;
`;
