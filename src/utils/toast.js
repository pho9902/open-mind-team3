import toast from "react-hot-toast";

/**
 * @param {string} message - 토스트 메시지
 * @param {string} bgColor - 배경색 (선택 사항)
 */
export const openToast = (message, bgColor) => {
  return toast(message, {
    duration: 5000,
    className: "toast",
    style: {
      background: bgColor,
    },
  });
};
