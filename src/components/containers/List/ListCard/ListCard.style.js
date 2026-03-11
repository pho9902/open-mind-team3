import styled from "styled-components";
import { media } from "@/styles/media";

export const CardProfile = styled.div`
  background: ${({ theme }) => theme.colors.gray10};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 187px;
  cursor: pointer;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.pt1};

  ${media.pc`
    
    width: 220px;
    `}
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  transform: none;
  transition: none;

  ${media.pc`
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $isFront }) => ($isFront ? "rotateY(0deg)" : "rotateY(180deg)")};
  `}
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export const CardFront = styled(CardFace)`
  z-index: 2;
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: ${({ theme }) => theme.colors.gray20}
  text-align: center;
  padding:0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  justify-content: flex-start;   
  text-align: center;
  gap: 20px;               

  
`;

export const QuestionContent = styled.p`
  margin: 0;
  padding: 0 10px;
  word-break: break-all;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray50};
  flex: 1;
  display: flex;
`;

export const SubjectName = styled.div`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.colors.gray60};
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const SubjectImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const QuestionLabel = styled.div`
  gap: 4px;
  align-items: center;
  display: flex;

  svg {
    width: 18px;
    height: 18px;
  }
`;
export const QuestionCount = styled.div`
  ${({ theme }) => theme.typography.body2};
  color: ${({ theme }) => theme.colors.gray40};
`;
