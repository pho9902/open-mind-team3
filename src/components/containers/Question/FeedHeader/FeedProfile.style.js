import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
  position: absolute;
  top: calc(234px - 135px);
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

// Todo: img로 변경 예정
export const Logo = styled.div`
  width: 124px;
  height: 49px;
  background-color: #ffffff;

  ${media.tablet` 
    width: 170px;
    height: 67px;
  `}
`;

export const ProfileImage = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 9999px;

  // Todo: background-image로 변경 예정
  background-color: ${({ theme }) => theme.colors.brown40};

  ${media.tablet`
    width: 136px;
    height: 136px;
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => theme.typography.h3};

  ${media.tablet`
    ${({ theme }) => theme.typography.h2};
  `}
`;

export const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
