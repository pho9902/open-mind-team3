import { useState } from "react";
import * as S from "../AnswerItem/AnswerItem.style";
import { TextArea } from "@/components/common/Input/Input.style";
import { questionApi } from "@/apis/question";
import { openToast } from "@/utils/toast";

export default function AnswerInput({
  userProfile = "https://picsum.photos/100/100",
  userName = "아초는고양이",
  fetchQuestions,
  question,
}) {
  const [content, setContent] = useState("");

  const handleTextChange = (e) => setContent(e.target.value);
  const isButtonActive = content.trim().length > 0;

  const handleSubmitButton = async () => {
    if (!isButtonActive) return;
    console.log(question);

    try {
      await questionApi.createAnswer(question.id, content);
      setContent("");
      openToast.success("답변을 등록했습니다.");
      fetchQuestions();
    } catch (error) {
      openToast.error("답변 등록에 실패했습니다. 다시 시도해주세요");
    }
  };

  return (
    <S.Container>
      <S.AnswerImage src={userProfile} alt="프로필 이미지" />
      <S.AnswerContent>
        <S.AnswerProfileName>{userName}</S.AnswerProfileName>

        <S.AnswerText>
          <TextArea
            placeholder="답변을 입력해주세요"
            value={content}
            onChange={handleTextChange}
          />
          <S.SubmitButton
            $active={isButtonActive}
            disabled={!isButtonActive}
            onClick={() => handleSubmitButton()}
          >
            답변 완료
          </S.SubmitButton>
        </S.AnswerText>
      </S.AnswerContent>
    </S.Container>
  );
}
