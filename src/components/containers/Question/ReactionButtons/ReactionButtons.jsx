import { useState, useRef, useEffect } from "react";
import { questionApi } from "@/apis/question";
import { openToast } from "@/utils/toast";

import { ThumbsDownIcon } from "@/assets/icons/ThumbsDownIcon";
import { ThumbsUpIcon } from "@/assets/icons/ThumbsUpIcon";

import * as S from "@/components/containers/Question/ReactionButtons/ReactionButtons.style";

export default function ReactionButtons({ question, isAnswer }) {
  const { id, like, dislike } = question;
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  const [isDislikeClicked, setIsDislikeClicked] = useState(() => {
    const stored = localStorage.getItem("dislikedQuestions");
    if (!stored) return false;

    return JSON.parse(stored).includes(id);
  });
  const [showEffect, setShowEffect] = useState([]);

  const clickCount = useRef(0);
  const timerRef = useRef(null);
  const effectTimerRef = useRef(new Set()); // effect timer 저장

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      effectTimerRef.current.forEach((timerId) => {
        clearTimeout(timerId);
      });
      effectTimerRef.current.clear();
    };
  }, []);

  const triggerEffect = () => {
    const effectId = Date.now();
    setShowEffect((prev) => [...prev, effectId]);

    const timer = setTimeout(() => {
      setShowEffect((prev) => prev.filter((id) => id !== effectId));
      effectTimerRef.current.delete(timer);
    }, 2000);
    effectTimerRef.current.add(timer);
  };

  //  /* 좋아요 무한클릭 */
  const handleLikeClick = async (e) => {
    e.preventDefault();

    if (isAnswer) {
      openToast.error("내 질문에는 좋아요를 누를 수 없습니다.");
      return;
    }

    clickCount.current += 1;
    setLikeCount((prev) => prev + 1);

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

    try {
      await questionApi.createReaction(id, "like");
      openToast.success("좋아요가 등록되었습니다.");
    } catch (error) {
      openToast.error("좋아요 등록에 실패했습니다. 다시 시도해주세요.");
      setLikeCount((prev) => prev - 1);
    }
  };

  /* 싫어요 클릭 */
  const handleDislikeClick = async (e) => {
    e.preventDefault();

    if (isAnswer) {
      openToast.error("내 질문에는 싫어요를 누를 수 없습니다.");
      return;
    }

    if (isDislikeClicked) {
      openToast.error("이미 싫어요를 누른 상태입니다.");
      return;
    }

    setDislikeCount((prev) => prev + 1);
    setIsDislikeClicked(true);

    try {
      await questionApi.createReaction(id, "dislike");

      const stored = localStorage.getItem("dislikedQuestions");
      const dislikedList = stored ? JSON.parse(stored) : [];

      dislikedList.push(id);

      localStorage.setItem("dislikedQuestions", JSON.stringify(dislikedList));

      openToast.success("싫어요가 등록되었습니다.");
    } catch (error) {
      setDislikeCount((prev) => prev - 1);
      setIsDislikeClicked(false);
      openToast.error("싫어요 등록에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      <S.LikeWrapper>
        {showEffect.map((effectId) => (
          <S.ThumbsUpEffect key={effectId}>
            <ThumbsUpIcon size={20} color="#ffffff" />
            <span>+10</span>
          </S.ThumbsUpEffect>
        ))}
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
