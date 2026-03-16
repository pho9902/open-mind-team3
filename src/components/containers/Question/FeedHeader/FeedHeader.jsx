import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoImg from "@/assets/img/LogoImg";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";

import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile";
import ShareButtons from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons";
import ScrollShareButtons from "@/components/containers/Question/FeedHeader/ScrollShareButtons/ScrollShareButtons";

import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";

const FeedHeader = ({ subjectData }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  /* header scroll observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 스크롤 안했을 때 헤더  */}
      <S.MainHeader $hidden={isHeaderVisible} ref={headerRef}>
        <S.ProfileContainer>
          <LogoImg width={170} />
          <FeedProfile subjectData={subjectData} />
          <ShareButtons subjectData={subjectData} />
        </S.ProfileContainer>
      </S.MainHeader>

      {/* 스크롤 헤더  */}
      {isHeaderVisible && (
        <S.ScrollContainer $visible={isHeaderVisible}>
          <S.PrevButton onClick={() => navigate(-1)}>
            <ArrowLeftIcon size={44} />
          </S.PrevButton>
          <S.ScrollFeedProfile>
            <FeedProfile
              subjectData={subjectData}
              $isScroll={isHeaderVisible}
            />
          </S.ScrollFeedProfile>
          <ScrollShareButtons $isScroll={isHeaderVisible} />
        </S.ScrollContainer>
      )}
    </>
  );
};

export default FeedHeader;
