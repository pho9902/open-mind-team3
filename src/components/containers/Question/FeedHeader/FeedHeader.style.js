import styled from "styled-components";
import { media } from "@/styles/media";
import BgImg from "@/assets/img/home-bg.svg";

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

export const ProfileContainer = styled.div`
  position: absolute;
  top: calc(234px - 150px);
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${media.tablet` 
    top: calc(234px - 180px);
  `}
`;

export const ScrollContainer = styled.div`
  z-index: 100;
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
  box-shadow: ${({ theme }) => theme.shadows.pt2};

  ${media.tablet`
    padding: 0 32px;
  `};

  ${media.pc`
    padding: 0 130px;
  `};
`;

export const PrevButton = styled.button`
  flex: 0.7;
  & svg {
    padding: 6px;
    &:hover {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.gray20};
    }
  }
`;

export const ScrollFeedProfile = styled.div`
  flex: 0.75;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
