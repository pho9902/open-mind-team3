import { forwardRef } from "react";
import { Link } from "react-router-dom";

import LogoImg from "@/assets/img/LogoImg";
import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile";
import ShareButtons from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons";
import ScrollShareButtons from "@/components/containers/Question/FeedHeader/ScrollShareButtons/ScrollShareButtons";

import { ArrowLeftIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";

const FeedHeader = forwardRef(({ $isScroll }, ref) => {
  return (
    <>
      {/* 스크롤 안했을 때 헤더  */}
      <S.MainHeader $hidden={$isScroll} ref={ref}>
        <S.ProfileContainer>
          <LogoImg width={170} as={Link} to="/" />
          <FeedProfile />
          <ShareButtons />
        </S.ProfileContainer>
      </S.MainHeader>

      {/* 스크롤 헤더  */}
      <S.ScrollContainer $visible={$isScroll}>
        <S.PrevButton as={Link} to="/list">
          <ArrowLeftIcon size={44} />
        </S.PrevButton>
        <S.ScrollFeedProfile>
          <FeedProfile $isScroll={$isScroll} />
        </S.ScrollFeedProfile>
        <ScrollShareButtons $isScroll={$isScroll} />
      </S.ScrollContainer>
    </>
  );
});

export default FeedHeader;
