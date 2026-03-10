import { useState, useEffect, useRef } from "react";

import ShareList from "@/components/containers/Question/FeedHeader/ShareButtons/ShareList";
import { BasicLinkIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons.style";

export default function ShareButtons({ $isScroll }) {
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

  // useEffect(() => {
  //   setIsDropdownOpen(false);
  // }, [$isScroll]);

  return (
    <S.ShareButtons ref={dropdownRef}>
      <S.MobileShareButton $isScroll={$isScroll} onClick={handleToggle}>
        <BasicLinkIcon />
      </S.MobileShareButton>

      {$isScroll && isDropdownOpen && (
        <S.ShareDropdown>
          <ShareList $isScroll={$isScroll} />
        </S.ShareDropdown>
      )}

      <S.PcShareButtons $isScroll={$isScroll}>
        <ShareList $isScroll={$isScroll} />
      </S.PcShareButtons>
    </S.ShareButtons>
  );
}
