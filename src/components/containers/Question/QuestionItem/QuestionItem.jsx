import * as S from "./QuestionItem.style";
import ReactionButtons from "@/components/containers/Question/ReactionButtons/ReactionButtons";

export default function QuestionItem({ question, answer }) {
  return (
    <S.Container key={question.id}>
      <S.AnswerStatus $isAnswer={!!answer}>
        {!answer ? "미답변" : answer.isReject ? "답변 거절" : "답변 완료"}
      </S.AnswerStatus>
      <S.QuestionWrapper>
        <S.ContentCategory>
          <span>질문</span>
          <span>{new Date(question.createdAt).toLocaleString()}</span>
        </S.ContentCategory>
        <S.Content>{question.content}</S.Content>
      </S.QuestionWrapper>
      {answer && (
        <div>
          <img src alt="답변자이미지" />
          <div>
            <div>
              <span>답변자이름</span>
              <span>답변 날짜</span>
            </div>
            <p>답변</p>
          </div>
        </div>
      )}
      <S.Line />
      <ReactionButtons question={question} />
    </S.Container>
  );
}
