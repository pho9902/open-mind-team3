import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
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

export const ProfileImage = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 9999px;

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
