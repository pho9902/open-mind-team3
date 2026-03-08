import styled from "styled-components";
import { media } from "@/styles/media";
import { FloatingButton } from "@/components/common/Button/Button.style";

export const Container = styled.div`
  width: 100%;
  height: 234px;
  position: relative;
  margin-bottom: 190px;

  // background-image로 변경 예정
  background-color: ${({ theme }) => theme.colors.brown30};
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.gray10};
  z-index: 1px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px;
  box-shadow: ${({ theme }) => theme.shadows.pt2};
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const ScrollFeedProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
  ${({ theme }) => theme.typography.h3};
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ShareButton = styled(FloatingButton)`
  background-color: ${({ theme }) => theme.colors.gray10};
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  color: ${({ theme }) => theme.colors.gray50};
`;
