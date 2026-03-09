import { forwardRef } from "react";

import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile";
import { scrollToTop } from "@/utils/windowScroll";
import { ArrowLeftIcon, BasicLinkIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";

const FeedHeader = forwardRef(({ isScroll }, ref) => {
  return (
    <S.Container>
      <S.MainHeader $hidden={isScroll} ref={ref}>
        <FeedProfile />
      </S.MainHeader>

      <S.ScrollContainer $visible={isScroll}>
        <S.LeftSection>
          <ArrowLeftIcon size={46} />
        </S.LeftSection>
        <S.ScrollFeedProfile onClick={scrollToTop}>
          {/* Todo: api 연결하면 질문자 이미지 받아오기 */}
          <S.ProfileImage
            src="https://picsum.photos/600/600"
            alt="질문자 이미지"
          />
          <S.ProfileName>프로필이름</S.ProfileName>
        </S.ScrollFeedProfile>
        <S.RightSection>
          <S.ShareButton>
            <BasicLinkIcon size={20} />
            <span>피드공유</span>
          </S.ShareButton>
        </S.RightSection>
      </S.ScrollContainer>
    </S.Container>
  );
});

export default FeedHeader;
