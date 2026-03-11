import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { subjectApi } from "@/apis/subject";
import { validateName } from "@/utils/validation";

export const useCreateFeed = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e, limit) => {
    const { value } = e.target;

    if (value.length <= limit) setInput(value);
  };

  const submitFeed = async (inputName) => {
    const result = validateName(inputName);

    if (!result.isValid) {
      setErrorMessage(result.message);
      return;
    }

    try {
      setPending(true);

      const data = await subjectApi.createFeed(inputName);
      localStorage.setItem("feedId", data.id);

      navigate(`/post/${data.id}/answer`);
    } catch (error) {
      setErrorMessage("피드 생성에 실패했어요. 다시 시도해 주세요.");

      setPending(false);
    }
  };

  return {
    input,
    errorMessage,
    pending,
    handleInputChange,
    submitFeed,
    isInputEmpty: input.trim().length === 0,
  };
};
