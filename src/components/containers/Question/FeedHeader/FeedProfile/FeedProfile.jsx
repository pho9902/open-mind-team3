import { scrollToTop } from "@/utils/windowScroll";

import * as S from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile.style";

export default function FeedProfile({ subjectData, $isScroll }) {
  const { name, imageSource } = subjectData || {};

  const handleProfileClick = () => {
    $isScroll && scrollToTop();
  };

  return (
    <S.Container $isScroll={$isScroll}>
      {/* Todo: api 연결하면 질문자 이미지,이름 받아오기 */}
      <S.ProfileContent onClick={handleProfileClick} $isScroll={$isScroll}>
        <S.ProfileImage
          src={imageSource || "https://picsum.photos/600/600"}
          alt="질문자 이미지"
        />
        <S.ProfileName>{name || "프로필 이름"}</S.ProfileName>
      </S.ProfileContent>
    </S.Container>
  );
}
