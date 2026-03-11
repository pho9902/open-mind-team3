import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons.style";

export default function ShareButtons({ $isScroll }) {
  return (
    <S.ShareListWrapper $isScroll={$isScroll}>
      <ShareLinkIcon />
      <ShareKakaoIcon />
      <ShareFacebookIcon />
    </S.ShareListWrapper>
  );
}
