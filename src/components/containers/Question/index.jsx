import React, { useEffect, useState } from "react";
import { getQuestions } from "@/apis/questions";

export default function Question({ subjectId }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await getQuestions(subjectId);
        console.log("질문목록:", data);
        console.log("질문목록 결과:", data.results);
        setQuestions(data.results);
      } catch (error) {
        console.error("질문목록 가져오기 오류:", error);
      }
    }
    fetchQuestions();
  }, [subjectId]);

  return (
    <div>
      <p>{questions.length}개의 질문이 있습니다.</p>
      {questions.map((question) => (
        <div key={question.id}>
          <div>
            {!question.answer
              ? "미답변"
              : question.answer.isReject
                ? "답변 거절"
                : "답변 완료"}
          </div>

          <div>
            <div>
              <span>질문</span>
              <span>{question.createdAt}</span>
            </div>
            <p>{question.content}</p>
          </div>

          {question.answer && (
            <div>
              <img src alt="답변자이미지" />
              <div>
                <div>
                  <span>답변자이름</span>
                  <span>답변 날짜</span>
                </div>
                <p>{question.answer.content}</p>
              </div>
            </div>
          )}
          <div>
            <button>좋아요 {question.like}</button>
            <button>싫어요 {question.dislike}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
