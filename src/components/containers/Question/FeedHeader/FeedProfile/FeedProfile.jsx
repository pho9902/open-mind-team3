import { useState, useEffect } from "react";
import { scrollToTop } from "@/utils/windowScroll";

import { BasicLinkIcon } from "@/assets/icons/Icons";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile.style";

export default function FeedProfile({ $isScroll }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    if (!$isScroll) return;
    setIsDropdownOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    $isScroll && scrollToTop();
  };

  useEffect(() => {
    if (!$isScroll && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }, [$isScroll, isDropdownOpen]);

  return (
    <S.Container $isScroll={$isScroll}>
      {/* Todo: api 연결하면 질문자 이미지,이름 받아오기 */}
      <S.ProfileContent onClick={handleProfileClick}>
        <S.ProfileImage
          src="https://picsum.photos/600/600"
          alt="질문자 이미지"
        />
        <S.ProfileName>프로필이름</S.ProfileName>
      </S.ProfileContent>
      <S.ShareButtons>
        <S.MobileShareButton onClick={handleToggle}>
          <BasicLinkIcon />
        </S.MobileShareButton>

        <S.ShareDropdown $isScroll={$isScroll} $isOpen={isDropdownOpen}>
          <ShareLinkIcon />
          <ShareKakaoIcon />
          <ShareFacebookIcon />
        </S.ShareDropdown>
      </S.ShareButtons>
    </S.Container>
  );
}
