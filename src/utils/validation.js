// 한글, 영어, 중간 공백만 허용하는 정규식
// ^ : 시작, $ : 끝, [ ] : 허용 범위, + : 1자 이상
const nameRegex = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/;

export const validateName = (name) => {
  const trimmedName = name.trim();

  if (trimmedName.length === 0) {
    return { isValid: false, message: "이름을 입력해 주세요." };
  }

  if (!nameRegex.test(trimmedName)) {
    return {
      isValid: false,
      message: "이름은 한글 또는 영어만 가능합니다.",
    };
  }

  return { isValid: true, validatedName: trimmedName };
};
