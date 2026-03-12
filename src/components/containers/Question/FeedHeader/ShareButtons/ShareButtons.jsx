import { openToast } from "@/utils/toast";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons.style";

export default function ShareButtons({ $isScroll }) {
  const currentUrl = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      openToast("URL이 복사되었습니다");
    } catch (error) {
      console.error("링크 복사 실패:", error);
      openToast("URL 복사에 실패했습니다", "#B93333");
    }
  };

  return (
    <S.ShareListWrapper $isScroll={$isScroll}>
      <ShareLinkIcon onClick={handleCopyLink} />
      <ShareKakaoIcon />
      <ShareFacebookIcon />
    </S.ShareListWrapper>
  );
}
