import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { createSubject } from "@/apis/subject";
import { Input } from "@/components/common/Input";
import { BasicButton } from "@/components/common/Button";

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
    <FormContainer onSubmit={handleCreateSubjectSubmit}>
      <Input
        value={input}
        placeholder="이름을 입력해주세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <BasicButton>질문 받기</BasicButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 40px;
    max-width: 456px;
  }
`;
