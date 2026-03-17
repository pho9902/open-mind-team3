import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray20};
`;

export const MainSection = styled.main`
  width: 100%;
  max-width: 940px;
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px 30px;

  h1 {
    ${({ theme }) => theme.typography.h1};
    color: ${({ theme }) => theme.colors.gray60};
  }

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    gap: 12px;
  `}

  ${media.pc`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    gap: 12px;
  `}
`;

export const CardGrid = styled.div`
  display: grid;
  padding: 0 24px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 16px;
  margin: 0 auto;

  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
    padding: 0 32px;
    gap: 20px;
  `}

  ${media.pc`
    grid-template-columns: repeat(4, 220px);
    justify-content: center; 
    padding: 0; 
    max-width: 1200px;
  `}
`;

export const CardItem = styled.div`
  background: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 187px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.pt1};

  ${media.pc`
    width: 220px;
  `}

  .user-name {
    ${({ theme }) => theme.typography.body1};
    color: ${({ theme }) => theme.colors.gray60};
  }

  .question-count {
    ${({ theme }) => theme.typography.caption1Regular};
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const SelectButton = styled.button`
  width: 79px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 8px;

  ${({ theme }) => theme.typography.caption1Regular};
  background-color: ${({ theme }) => theme.colors.gray10};

  border: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.gray60 : theme.colors.gray40};

  color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.gray60 : theme.colors.gray40};
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;

    path {
      fill: currentColor;
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray60};
    color: ${({ theme }) => theme.colors.gray60};
    background-color: ${({ theme }) => theme.colors.gray20};
  }
`;

export const SelectContainer = styled.div`
  text-align: left;
  width: 79px;
  position: relative;
`;

export const OptionList = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 79px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 8px;
  padding: 4px 0;
  margin: 0;
  list-style: none;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.pt1};
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;

  ${({ theme }) => theme.typography.caption1Regular};
  color: ${({ theme }) => theme.colors.gray40};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
  }
`;
