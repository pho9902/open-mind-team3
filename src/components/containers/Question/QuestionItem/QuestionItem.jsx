import { useState } from "react";
import { formatDate } from "@/utils/formatDate";

import AnswerItem from "@/components/containers/Question/AnswerItem/AnswerItem";
import ReactionButtons from "@/components/containers/Question/ReactionButtons/ReactionButtons";
import AnswerInput from "@/components/containers/Question/AnswerInput";

import * as S from "@/components/containers/Question/QuestionItem/QuestionItem.style";
import Kebab from "@/components/containers/Question/QuestionItem/Kebab";

export default function QuestionItem({
  question,
  answer,
  isAnswer,
  fetchQuestions,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Container key={question.id}>
      <S.ItemHeader>
        <S.AnswerStatus $isAnswer={!!answer}>
          {!answer ? "미답변" : answer.isRejected ? "답변 거절" : "답변 완료"}
        </S.AnswerStatus>
        {isAnswer && (
          <Kebab
            question={question}
            answer={answer}
            fetchQuestions={fetchQuestions}
            setIsEditing={setIsEditing}
          />
        )}
      </S.ItemHeader>

      <S.QuestionWrapper>
        <S.ContentCategory>
          <span>질문</span>
          <span>{formatDate.relative(question.createdAt)}</span>
        </S.ContentCategory>
        <S.Content>{question.content}</S.Content>
      </S.QuestionWrapper>

      {answer &&
        (isEditing ? (
          <AnswerInput
            fetchQuestions={fetchQuestions}
            question={question}
            initialContent={answer.content}
            isEdit={true}
            setIsEditing={setIsEditing}
            answerId={answer.id}
          />
        ) : (
          <AnswerItem answer={answer} />
        ))}

      {isAnswer && !answer && (
        <AnswerInput fetchQuestions={fetchQuestions} question={question} />
      )}

      <S.Line />
      <ReactionButtons question={question} />
    </S.Container>
  );
}
