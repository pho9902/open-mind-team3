import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;

  grid-template-columns: repeat(2, 1fr);
  padding: 0 24px;
  gap: 16px;

  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
    padding: 0 32px;
    gap: 20px;
    `}

  ${media.pc`
    grid-template-columns: repeat(4, 220px);
    justify-content: center; 
    padding: 0;
  `}
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 187px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 16px;
  padding: 20px;

  ${media.pc`
    width: 220px;
  `}

  .userImgSkeleton {
    width: 60px;
    height: 60px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
