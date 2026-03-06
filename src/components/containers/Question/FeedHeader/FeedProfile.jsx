import * as S from "./FeedProfile.style";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

export default function FeedProfile() {
  return (
    <S.Container>
      <S.Logo />
      <S.ProfileImage />
      <S.ProfileName>프로필이름</S.ProfileName>
      <S.ShareButtons>
        <ShareLinkIcon />
        <ShareKakaoIcon />
        <ShareFacebookIcon />
      </S.ShareButtons>
    </S.Container>
  );
}
