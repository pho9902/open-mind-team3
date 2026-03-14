import toast from "react-hot-toast";

import { ToastSuccessIcon } from "@/assets/icons/ToastSuccessIcon";
import { ToastErrorIcon } from "@/assets/icons/ToastErrorIcon";

const DEFAULT_OPTIONS = {
  duration: 5000,
  id: "unique-toast",
  className: "toast",
};

export const openToast = (message) => {
  return toast(message, {
    ...DEFAULT_OPTIONS,
    icon: null,
    style: {
      ...DEFAULT_OPTIONS.style,
    },
  });
};

openToast.success = (message) =>
  toast.success(message, {
    ...DEFAULT_OPTIONS,
    icon: <ToastSuccessIcon />,
    style: {
      ...DEFAULT_OPTIONS.style,
      background: "rgba(60, 179, 113, 1)",
    },
  });

openToast.error = (message) =>
  toast.error(message, {
    ...DEFAULT_OPTIONS,
    icon: <ToastErrorIcon />,
    style: {
      ...DEFAULT_OPTIONS.style,
      background: "rgba(255, 59, 48, 1)",
    },
  });
