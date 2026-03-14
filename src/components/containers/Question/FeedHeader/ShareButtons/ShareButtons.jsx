import { openToast } from "@/utils/toast";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons.style";

export default function ShareButtons({ subjectData, $isScroll }) {
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

  // Todo: 배포하고 다시 확인하기 - 게시물에 대한 공유가 아직 확인 안 됨
  // Todo: meta 태그에 og:image, og:title, og:description 추가하기
  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(currentUrl);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
      "facebook-share-dialog",
      "width=600,height=800,location=no,status=no,scrollbars=yes",
    );
  };

  const TEMPLATE_ID = 130655;
  const shareToKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_KEY);
      }

      kakao.Share.sendCustom({
        templateId: TEMPLATE_ID,
        templateArgs: {
          path: currentUrl,
          name: subjectData?.name || "",
          like: subjectData?.like || 0,
        },
      });
    }
  };

  return (
    <S.ShareListWrapper $isScroll={$isScroll}>
      <ShareLinkIcon onClick={handleCopyLink} />
      <ShareKakaoIcon onClick={shareToKakao} />
      <ShareFacebookIcon onClick={shareToFacebook} />
    </S.ShareListWrapper>
  );
}
