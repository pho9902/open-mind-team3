import { forwardRef } from "react";
import { Link } from "react-router-dom";

import LogoImg from "@/assets/img/LogoImg";
import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile";

import { ArrowLeftIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";

const FeedHeader = forwardRef(({ $isScroll }, ref) => {
  return (
    <S.Container>
      <S.MainHeader $hidden={$isScroll} ref={ref}>
        <S.ProfileContainer>
          <LogoImg width={170} />
          <FeedProfile />
        </S.ProfileContainer>
      </S.MainHeader>

      <S.ScrollContainer $visible={$isScroll}>
        <S.LeftSection as={Link} to="/list">
          <ArrowLeftIcon size={46} />
        </S.LeftSection>
        <S.ScrollFeedProfile>
          <FeedProfile $isScroll={$isScroll} />
        </S.ScrollFeedProfile>
      </S.ScrollContainer>
    </S.Container>
  );
});

export default FeedHeader;
