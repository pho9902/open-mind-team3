export function getFormattedDate(prop) {
  const rtf = new Intl.RelativeTimeFormat("ko", {
    numeric: "auto",
    style: "short",
  });

  const today = new Date();
  const postDay = Math.floor(
    (today - new Date(prop.createdAt)) / (1000 * 60 * 60 * 24),
  );

  if (postDay <= 7) {
    return rtf.format(-postDay, "day"); // n일전
  } else if (postDay <= 30) {
    return rtf.format(-Math.floor(postDay / 7), "week"); // n주전
  } else if (postDay <= 365) {
    return rtf.format(-Math.floor(postDay / 30), "month"); // n개월 전
  } else {
    return rtf.format(-Math.floor(postDay / 365), "year"); // n년 전
  }
}
