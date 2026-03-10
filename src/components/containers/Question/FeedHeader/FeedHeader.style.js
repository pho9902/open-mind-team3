import styled from "styled-components";
import { media } from "@/styles/media";
import BgImg from "@/assets/img/home-bg.svg";

export const Container = styled.div``;

export const MainHeader = styled.div`
  width: 100%;
  height: 234px;
  position: relative;
  margin-bottom: 190px;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.3s ease;

  background-image: url(${BgImg});
  background-size: max(100%, 1200px) auto;
  background-repeat: no-repeat;
  background-position: center 70%;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.gray10};
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(-10px)"};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  box-shadow: ${({ theme }) => theme.shadows.pt2};

  ${media.tablet`
    padding: 0 32px;
  `};

  ${media.pc`
    padding: 0 130px;
  `};
`;

export const LeftSection = styled.div`
  flex: 1;

  & svg {
    padding: 6px;
    &:hover {
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.colors.gray30}66;
    }
  }
`;

export const ScrollFeedProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
`;

export const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  display: none;

  ${media.tablet` 
    display:inline;
  `}
`;

export const ProfileName = styled.h1`
  ${({ theme }) => theme.typography.body1};

  ${media.tablet`
    ${({ theme }) => theme.typography.h3};
  `};
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ShareButton = styled.button`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.gray60};

  & span {
    display: none;
    ${({ theme }) => theme.typography.body3Actor};
  }

  ${media.tablet`
    & span {
      display: inline;
    }
  `};

  &:hover {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray30}66;
  }
`;
