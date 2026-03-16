import { useState } from "react";
import * as S from "../AnswerItem/AnswerItem.style";
import { TextArea } from "@/components/common/Input/Input.style";
import { questionApi } from "@/apis/question";
import { answerApi } from "@/apis/answer";
import { openToast } from "@/utils/toast";
import placeholderImage from "@/assets/img/user-placeholderImage.svg";

export default function AnswerInput({
  userProfile = placeholderImage,
  userName = "사용자",
  fetchQuestions,
  question,
  initialContent = "",
  isEdit = false,
  setIsEditing,
  answerId,
}) {
  const [content, setContent] = useState(initialContent);

  const handleTextChange = (e) => setContent(e.target.value);
  const isButtonActive = content.trim().length > 0;

  const handleSubmitButton = async () => {
    if (!isButtonActive) return;

    try {
      if (isEdit) {
        await answerApi.editAnswer(answerId, content);
        openToast.success("답변을 수정했습니다.");
        setIsEditing(false);
      } else {
        await questionApi.createAnswer(question.id, content);
        openToast.success("답변을 등록했습니다.");
        setContent("");
      }
      fetchQuestions();
    } catch (error) {
      openToast.error(`${isEdit ? "수정" : "등록"}에 실패했습니다.`);
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
            autoFocus={isEdit}
          />
          <S.SubmitButton
            $active={isButtonActive}
            disabled={!isButtonActive}
            onClick={() => handleSubmitButton()}
          >
            {isEdit ? "수정 완료" : "답변 완료"}
          </S.SubmitButton>
        </S.AnswerText>
      </S.AnswerContent>
    </S.Container>
  );
}
