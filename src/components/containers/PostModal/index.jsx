import { useState } from "react";
import { postQuestions } from "@/apis/questions";

export default function PostModal({ subjectId, onClose }) {
  const [questionContent, setQuestionContent] = useState("");

  const handleClick = async () => {
    console.log("질문 생성 버튼 클릭됨");
    try {
      const result = await postQuestions(subjectId, questionContent);
      console.log("질문 생성 성공:", result);
      onClose(); // 질문 생성 후 모달 닫기
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>질문을 작성하세요</h2>
      <p>To. {subjectId}</p>
      <textarea
        placeholder="질문 내용을 입력하세요"
        value={questionContent}
        onChange={(e) => setQuestionContent(e.target.value)}
      />
      <button onClick={handleClick}>질문 보내기</button>
    </div>
  );
}
