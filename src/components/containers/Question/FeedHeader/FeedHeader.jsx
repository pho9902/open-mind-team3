import { forwardRef } from "react";
import { Link } from "react-router-dom";

import LogoImg from "@/assets/img/LogoImg";

import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile";
import ShareButtons from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons";
import ScrollShareButtons from "@/components/containers/Question/FeedHeader/ScrollShareButtons/ScrollShareButtons";

import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";

const FeedHeader = forwardRef(({ subjectData, $isScroll }, ref) => {
  return (
    <>
      {/* 스크롤 안했을 때 헤더  */}
      <S.MainHeader $hidden={$isScroll} ref={ref}>
        <S.ProfileContainer>
          <LogoImg width={170} as={Link} to="/" />
          <FeedProfile subjectData={subjectData} />
          <ShareButtons />
        </S.ProfileContainer>
      </S.MainHeader>

      {/* 스크롤 헤더  */}
      <S.ScrollContainer $visible={$isScroll}>
        <S.ScrollFeedProfile>
          <FeedProfile subjectData={subjectData} $isScroll={$isScroll} />
        </S.ScrollFeedProfile>
        <S.ShareButtonsPosition>
          <ScrollShareButtons $isScroll={$isScroll} />
        </S.ShareButtonsPosition>
      </S.ScrollContainer>
    </>
  );
});

export default FeedHeader;
