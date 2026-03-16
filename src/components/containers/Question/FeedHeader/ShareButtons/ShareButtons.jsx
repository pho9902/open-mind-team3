import { useLocation } from "react-router-dom";
import { openToast } from "@/utils/toast";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons.style";

export default function ShareButtons({ subjectData, $isScroll }) {
  const { pathname } = useLocation();

  // Todo: 배포 후에 다시 확인하기 - 게시물에 대한 공유가 아직 확인 안 됨
  const handleCopyLink = async () => {
    try {
      const currentUrl = `${window.location.origin}${pathname}`;
      await navigator.clipboard.writeText(currentUrl);
      openToast.success("URL이 복사되었습니다");
    } catch (error) {
      console.error("링크 복사 실패:", error);
      openToast.error("URL 복사에 실패했습니다");
    }
  };

  // Todo: 배포하고 다시 확인하기 - 게시물에 대한 공유가 아직 확인 안 됨
  const shareToFacebook = () => {
    const currentUrl = `${window.location.origin}${pathname}`;
    const sharedLink = encodeURIComponent(currentUrl);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
      "facebook-share-dialog",
      "width=600,height=800,location=no,status=no,scrollbars=yes",
    );
  };

  // Todo: 배포 후 카카오개발자사이트에서 배포 링크로 변경 - 지금 로컬로 되는 상태
  const TEMPLATE_ID = 130655;
  const shareToKakao = () => {
    const { Kakao } = window;
    if (!Kakao) return;

    if (!Kakao.isInitialized()) {
      Kakao.init(import.meta.env.VITE_KAKAO_KEY);
    }

    Kakao.Share.sendCustom({
      templateId: TEMPLATE_ID,
      templateArgs: {
        path: pathname.startsWith("/") ? pathname.substring(1) : pathname,
        name: subjectData?.name || "",
        like: subjectData?.like || 0,
      },
    });
  };

  return (
    <S.ShareListWrapper $isScroll={$isScroll}>
      <ShareLinkIcon onClick={handleCopyLink} />
      <ShareKakaoIcon onClick={shareToKakao} />
      <ShareFacebookIcon onClick={shareToFacebook} />
    </S.ShareListWrapper>
  );
}
