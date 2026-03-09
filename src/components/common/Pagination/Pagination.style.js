import styled, { css } from "styled-components";

const commonLinkStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  ${({ theme }) => theme.typography.body1Actor};
  text-decoration: none;

  cursor: pointer;
`;

const disabledStyle = css`
  pointer-events: none;
  cursor: default;
`;

const hoverStyle = css`
  &:hover {
    color: ${({ $isActive, theme }) => !$isActive && theme.colors.gray60};
  }
`;

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  user-select: none;
`;

export const PageItem = styled.div`
  display: flex;
  align-items: center;
`;

export const PageButton = styled.div`
  ${commonLinkStyle}

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.brown40 : theme.colors.gray40};

  ${({ $isActive }) => $isActive && disabledStyle}

  ${hoverStyle}
`;

export const ArrowButton = styled.div`
  ${commonLinkStyle}

  color: ${({ theme }) => theme.colors.gray40};
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};

  ${({ $disabled }) => $disabled && disabledStyle}

  ${hoverStyle}
`;
