import LogoImg from "@/assets/img/LogoImg";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile.style";

export default function FeedProfile() {
  return (
    <S.Container>
      <LogoImg width={170} />
      {/* Todo: api 연결하면 질문자 이미지 받아오기 */}
      <S.ProfileImage src="https://picsum.photos/600/600" alt="질문자 이미지" />
      <S.ProfileName>프로필이름</S.ProfileName>
      <S.ShareButtons>
        <ShareLinkIcon />
        <ShareKakaoIcon />
        <ShareFacebookIcon />
      </S.ShareButtons>
    </S.Container>
  );
}
