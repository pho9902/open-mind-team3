import { scrollToTop } from "@/utils/windowScroll";
import placeholderImage from "@/assets/img/user-placeholderImage.svg";

import * as S from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile.style";

export default function FeedProfile({ subjectData, $isScroll }) {
  const { name, imageSource } = subjectData || {};

  const handleProfileClick = () => {
    $isScroll && scrollToTop();
  };

  return (
    <S.Container $isScroll={$isScroll}>
      <S.ProfileContent onClick={handleProfileClick} $isScroll={$isScroll}>
        <S.ProfileImage
          src={imageSource || placeholderImage}
          alt="질문자 이미지"
        />
        <S.ProfileName>{name || "사용자"}</S.ProfileName>
      </S.ProfileContent>
    </S.Container>
  );
}
