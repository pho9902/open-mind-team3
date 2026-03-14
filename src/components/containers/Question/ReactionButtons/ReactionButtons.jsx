import { useState, useRef } from "react";
import { questionApi } from "@/apis/question";

import { ThumbsDownIcon } from "@/assets/icons/ThumbsDownIcon";
import { ThumbsUpIcon } from "@/assets/icons/ThumbsUpIcon";

import * as S from "@/components/containers/Question/ReactionButtons/ReactionButtons.style";

export default function ReactionButtons({ question }) {
  const { id, like, dislike } = question;
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  const [isDislikeClicked, setIsDislikeClicked] = useState(() => {
    return !!localStorage.getItem(id);
  });

  /* 좋아요 무한클릭을 위한 state */
  const [showEffect, setShowEffect] = useState(false);
  const clickCount = useRef(0);
  const timerRef = useRef(null);

  const triggerEffect = () => {
    setShowEffect(true);

    setTimeout(() => {
      setShowEffect(false);
    }, 2000);
  };

  /* 좋아요 무한클릭 */
  const handleLikeClick = async (e) => {
    e.preventDefault();

    setLikeCount((prev) => prev + 1);

    clickCount.current += 1;

    // 10회 클릭마다 effect 적용
    if (clickCount.current >= 10) {
      triggerEffect();
      clickCount.current = 0;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      clickCount.current = 0;
    }, 2000);

    // Todo: toast로 좋아요 성공/실패 표시
    try {
      await questionApi.createReaction(id, "like");
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
      setLikeCount((prev) => prev - 1);
    }
  };

  /* 싫어요 클릭 */
  const handleDislikeClick = async (e) => {
    e.preventDefault();

    // Todo: toast로 이미 싫어요를 누른 상태임을 표시
    if (isDislikeClicked) return;

    setDislikeCount((prev) => prev + 1);
    setIsDislikeClicked(true);
    // Todo: toast로 싫어요 성공/실패 표시
    try {
      await questionApi.createReaction(id, "dislike");
      localStorage.setItem(id, "true");
    } catch (error) {
      console.error("싫어요 처리 중 오류 발생:", error);
      setDislikeCount((prev) => prev - 1);
      setIsDislikeClicked(false);
      localStorage.removeItem(id);
    }
  };

  return (
    <S.Container>
      <S.LikeWrapper>
        {showEffect && (
          <S.ThumbsUpEffect>
            <ThumbsUpIcon size={20} color="#ffffff" />
            <span>+10</span>
          </S.ThumbsUpEffect>
        )}
        <S.ReactionButton onClick={handleLikeClick}>
          <ThumbsUpIcon size={24} />
          <S.ReactionCount>
            <span>좋아요</span>
            <span>{likeCount >= 999 ? "999+" : likeCount}</span>
          </S.ReactionCount>
        </S.ReactionButton>
      </S.LikeWrapper>

      <S.ReactionButton
        $variant="dislike"
        $isDislikeClicked={isDislikeClicked}
        onClick={handleDislikeClick}
      >
        <ThumbsDownIcon size={24} />
        <S.ReactionCount>
          <span>싫어요</span>
          <span>{dislikeCount >= 999 ? "999+" : dislikeCount}</span>
        </S.ReactionCount>
      </S.ReactionButton>
    </S.Container>
  );
}
