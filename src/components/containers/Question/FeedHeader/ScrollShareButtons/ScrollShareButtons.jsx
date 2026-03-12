import { useState, useEffect, useRef } from "react";

import { BasicLinkIcon } from "@/assets/icons/BasicLinkIcon";

import * as S from "@/components/containers/Question/FeedHeader/ScrollShareButtons/ScrollShareButtons.style";
import ShareButtons from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons";

export default function ScrollShareButtons({ $isScroll }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    if (!$isScroll) return;
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.ShareButtons ref={dropdownRef}>
      {/* 모바일 */}
      <S.MobileShareButton $isScroll={$isScroll} onClick={handleToggle}>
        <BasicLinkIcon />
      </S.MobileShareButton>

      {isDropdownOpen && (
        <S.ShareDropdown>
          <ShareButtons $isScroll={$isScroll} />
        </S.ShareDropdown>
      )}

      {/* PC */}
      <S.PcShareButtons $isScroll={$isScroll}>
        <ShareButtons $isScroll={$isScroll} />
      </S.PcShareButtons>
    </S.ShareButtons>
  );
}
