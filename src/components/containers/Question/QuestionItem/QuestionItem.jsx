import { getFormattedDate } from "@/utils/getFormattedDate";

import AnswerItem from "@/components/containers/Question/AnswerItem/AnswerItem";
import ReactionButtons from "@/components/containers/Question/ReactionButtons/ReactionButtons";
import AnswerInput from "@/components/containers/Question/AnswerInput";

import * as S from "@/components/containers/Question/QuestionItem/QuestionItem.style";
import Kebab from "@/components/containers/Question/QuestionItem/Kebab";

export default function QuestionItem({ question, answer, isAnswer }) {
  return (
    <S.Container key={question.id}>
      <S.ItemHeader>
        <S.AnswerStatus $isAnswer={!!answer}>
          {!answer ? "미답변" : answer.isRejected ? "답변 거절" : "답변 완료"}
        </S.AnswerStatus>
        {isAnswer && <Kebab />}
      </S.ItemHeader>

      <S.QuestionWrapper>
        <S.ContentCategory>
          <span>질문</span>
          <span>{getFormattedDate(question)}</span>
        </S.ContentCategory>
        <S.Content>{question.content}</S.Content>
      </S.QuestionWrapper>
      {answer && <AnswerItem answer={answer} />}
      {isAnswer && !answer && <AnswerInput />}
      {/* 주헌님과 논의, useProfile 위치 결정후 props 결정 */}
      <S.Line />
      <ReactionButtons question={question} />
    </S.Container>
  );
}
