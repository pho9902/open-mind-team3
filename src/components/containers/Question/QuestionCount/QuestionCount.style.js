import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.brown40};
`;

export const CountText = styled.p`
  ${({ theme }) => theme.typography.body2Actor};

  @media (min-width: 768px) {
    ${({ theme }) => theme.typography.body1Actor};
  }
`;
