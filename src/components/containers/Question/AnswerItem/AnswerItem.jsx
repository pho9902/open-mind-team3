import { useState, useRef, useEffect } from "react";
import { formatDate } from "@/utils/formatDate";

import placeholderImage from "@/assets/img/user-placeholderImage.svg";

import * as S from "@/components/containers/Question/AnswerItem/AnswerItem.style";

export default function AnswerItem({ answer, subjectData }) {
  const { content, isRejected } = answer;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsOverflow(el.scrollHeight > el.clientHeight);
    }
  }, [content]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <S.Container>
      <S.AnswerImage
        src={subjectData?.imageSource || placeholderImage}
        alt="답변자프로필이미지"
      />
      <S.AnswerContent>
        <S.AnswerProfile>
          <S.AnswerProfileName>
            {subjectData?.name || "사용자"}
          </S.AnswerProfileName>
          <S.AnswerProfileDate>
            {formatDate.relative(answer.createdAt)}
          </S.AnswerProfileDate>
        </S.AnswerProfile>

        <S.TextWrapper>
          <S.AnswerText
            ref={textRef}
            $isExpanded={isExpanded}
            $isRejected={isRejected}
          >
            {isRejected ? "답변거절" : content}
          </S.AnswerText>

          {!isExpanded && isOverflow && (
            <S.MoreBtn onClick={handleExpand}>더보기</S.MoreBtn>
          )}

          {isExpanded && (
            <S.FoldBtn
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              간략히 보기
            </S.FoldBtn>
          )}
        </S.TextWrapper>
      </S.AnswerContent>
    </S.Container>
  );
}
