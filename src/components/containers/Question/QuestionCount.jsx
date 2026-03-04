import React from "react";

export default function QuestionCount({ questions }) {
  return <p>{questions.length}개의 질문이 있습니다.</p>;
}
