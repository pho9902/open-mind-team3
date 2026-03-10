import { scrollToTop } from "@/utils/windowScroll";
import ShareButtons from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons";

import * as S from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile.style";

export default function FeedProfile({ $isScroll }) {
  const handleProfileClick = () => {
    $isScroll && scrollToTop();
  };

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
      <ShareButtons $isScroll={$isScroll} />
    </S.Container>
  );
}
