import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray20};
`;

