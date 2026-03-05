import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createSubject } from "@/apis/subject";
import { Input } from "@/components/common/Input";
import { BasicButton } from "@/components/common/Button";

import * as S from "./HomeForm.style";

export default function HomeForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleCreateSubjectSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    try {
      const data = await createSubject(input);
      localStorage.setItem("myFeedId", data.id);

      navigate(`/post/${data.id}/answer`);
    } catch (error) {
      alert("피드 생성에 실패했습니다.");
      console.log(error);
    }
  };

  return (
    <S.FormContainer onSubmit={handleCreateSubjectSubmit}>
      <Input
        value={input}
        placeholder="이름을 입력해주세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <BasicButton type="submit">질문 받기</BasicButton>
    </S.FormContainer>
  );
}
