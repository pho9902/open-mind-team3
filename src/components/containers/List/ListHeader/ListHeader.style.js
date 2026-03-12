import styled from "styled-components";
import { media } from "@/styles/media";

export const LogoWrapper = styled.div`
  width: 146px;
  height: 57px;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.gray20};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 52px;
  gap: 20px;
  width: 100%;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;    
    margin: 40px 0; 
    padding: 0 50px;
    
    `}

  ${media.pc`
    max-width: 940px;
    margin: 40px auto;
    justify-content: space-between;    
    flex-direction: row;
    padding: 0;
  
    `}
`;
