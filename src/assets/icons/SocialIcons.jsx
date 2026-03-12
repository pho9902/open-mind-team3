import styled from "styled-components";

import { theme } from "@/styles/theme";

import { BasicLinkIcon } from "@/assets/icons/BasicLinkIcon";
import { BasicKakaoIcon } from "@/assets/icons/BasicKakaoIcon";
import { BasicFacebookIcon } from "@/assets/icons/BasicFacebookIcon";

export const ShareLinkIcon = ({ ...props }) => {
  return (
    <SocialWrapper $bgColor={theme.colors.brown40} {...props}>
      <BasicLinkIcon size={18} color={"white"} />
    </SocialWrapper>
  );
};

export const ShareKakaoIcon = ({ ...props }) => {
  return (
    <SocialWrapper $bgColor={theme.colors.yellow} {...props}>
      <BasicKakaoIcon size={18} />
    </SocialWrapper>
  );
};

export const ShareFacebookIcon = ({ ...props }) => {
  return (
    <SocialWrapper $bgColor={theme.colors.blue} {...props}>
      <BasicFacebookIcon size={18} color={"white"} />
    </SocialWrapper>
  );
};

const SocialWrapper = styled.button`
  background-color: ${({ $bgColor }) => $bgColor || theme.colors.brown40};

  width: 40px;
  height: 40px;

  border-radius: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
