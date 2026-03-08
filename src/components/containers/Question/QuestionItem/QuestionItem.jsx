import * as S from "@/components/containers/Question/QuestionItem/QuestionItem.style";
import AnswerItem from "@/components/containers/Question/AnswerItem/AnswerItem";
import ReactionButtons from "@/components/containers/Question/ReactionButtons/ReactionButtons";
import { getFormattedDate } from "@/utils/getFormattedDate";

export default function QuestionItem({ question, answer }) {
  return (
    <S.Container key={question.id}>
      <S.AnswerStatus $isAnswer={!!answer}>
        {!answer ? "미답변" : answer.isRejected ? "답변 거절" : "답변 완료"}
      </S.AnswerStatus>
      <S.QuestionWrapper>
        <S.ContentCategory>
          <span>질문</span>
          <span>{getFormattedDate(question)}</span>
        </S.ContentCategory>
        <S.Content>{question.content}</S.Content>
      </S.QuestionWrapper>
      {answer && <AnswerItem answer={answer} />}
      <S.Line />
      <ReactionButtons question={question} />
    </S.Container>
  );
}
