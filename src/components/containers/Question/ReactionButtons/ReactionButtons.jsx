import { ThumsUpIcon, ThumbsDownIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/Question/ReactionButtons/ReactionButtons.style";

export default function ReactionButtons({ question }) {
  return (
    <S.Container>
      <S.ReactionButton>
        <ThumsUpIcon size={24} /> {/* Todo: ThumbsUpIcon icon 이름 변경*/}
        <S.ReactionCount>
          <span>좋아요</span>
          <span>100</span>
        </S.ReactionCount>
      </S.ReactionButton>
      <S.ReactionButton $variant="dislike">
        <ThumbsDownIcon size={24} />
        <S.ReactionCount>
          <span>싫어요</span>
          <span>{question.dislike}</span>
        </S.ReactionCount>
      </S.ReactionButton>
    </S.Container>
  );
}
