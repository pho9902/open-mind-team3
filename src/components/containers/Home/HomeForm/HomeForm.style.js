import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.gray10};

  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    max-width: 456px;
    padding: 40px;
  }
`;
