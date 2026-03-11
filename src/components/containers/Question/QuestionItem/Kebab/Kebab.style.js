import styled from "styled-components";

export const KebabContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const KebabButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray20};
  }
`;

export const MenuWrapper = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.pt1};
  padding: 4px 0;
  margin-top: 4px;
  z-index: 10;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.gray50};
  ${({ theme }) => theme.typography.caption1Regular};
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray20};
    color: ${({ theme }) => theme.colors.gray60};
  }

  &.delete {
    color: ${({ theme }) => theme.colors.red};
  }
`;
