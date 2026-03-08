import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";
import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile";
import { ArrowLeftIcon } from "@/assets/icons/Icons";
import { BasicLinkIcon } from "@/assets/icons/Icons";

export const FeedHeader = () => {
  return (
    <S.Container>
      <FeedProfile />
    </S.Container>
  );
};

export const ScrollFeedHeader = () => {
  return (
    <S.ScrollContainer>
      <S.LeftSection>
        <ArrowLeftIcon size={44} />
      </S.LeftSection>

      <S.ScrollFeedProfile>
        {/* Todo: api 연결하면 질문자 이미지 받아오기 */}
        <S.ProfileImage
          src="https://picsum.photos/600/600"
          alt="질문자이미지"
        />
        <S.ProfileName>질문자이름</S.ProfileName>
      </S.ScrollFeedProfile>
      <S.RightSection>
        <S.ShareButton>
          <BasicLinkIcon />
          공유하기
        </S.ShareButton>
      </S.RightSection>
    </S.ScrollContainer>
  );
};
