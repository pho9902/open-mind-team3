import React from "react";
import ReactionButton from "@/components/containers/Question/ReactionButtons";

export default function QuestionItem({ question, answer }) {
  return (
    <div key={question.id}>
      <div>
        {!answer ? "미답변" : answer.isReject ? "답변 거절" : "답변 완료"}
      </div>
      <div>
        <div>
          <span>질문</span>
          <span>{new Date(question.createdAt).toLocaleString()}</span>
        </div>
        <p>{question.content}</p>
      </div>
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
      <ReactionButton question={question} />
    </div>
  );
}
