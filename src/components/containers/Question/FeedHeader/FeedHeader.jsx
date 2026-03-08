import { forwardRef } from "react";
import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";
import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile";
import { ArrowLeftIcon } from "@/assets/icons/Icons";
import { BasicLinkIcon } from "@/assets/icons/Icons";

const FeedHeader = forwardRef(({ isScroll }, ref) => {
  return (
    <S.Container ref={ref}>
      <S.MainHeader $hidden={isScroll}>
        <FeedProfile />
      </S.MainHeader>

      <S.ScrollContainer $visible={isScroll}>
        <S.LeftSection>
          <ArrowLeftIcon size={46} />
        </S.LeftSection>
        <S.ScrollFeedProfile>
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
