import { useEffect } from "react";

export const useScrollLock = () => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPadding = window.getComputedStyle(document.body).paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = originalPadding;
    };
  }, []);
};
