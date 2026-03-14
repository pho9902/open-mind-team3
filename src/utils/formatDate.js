const startDay = (date) => {
  const d = new Date(date);
  return (d.getFullYear(), d.getMonth(), d.getDate());
};

export const formatDate = {
  relative: (date) => {
    const target = new Date(date);
    const now = new Date();

    const targetDay = startDay(target);
    const nowDay = startDay(now);

    const diffDay = Math.trunc((targetDay - nowDay) / (1000 * 60 * 60 * 24));

    const rtf = new Intl.RelativeTimeFormat("ko", {
      numeric: "auto",
      style: "short",
    });

    if (diffDay === 0) return "오늘";

    // n일 전 처리 (6일 전까지)
    if (diffDay >= -6) {
      return rtf.format(diffDay, "day");
    }

    // n주 전 처리 (7일~27일 사이)
    // 13일 차이: trunc(-13 / 7) = -1 (지난주)
    // 14일 차이: trunc(-14 / 7) = -2 (2주 전)
    const diffWeek = Math.trunc(diffDay / 7);
    if (diffWeek >= -3) {
      return rtf.format(diffWeek, "week");
    }

    // n개월 전 (달력의 월 차이 기준)
    const diffMonth = Math.trunc(
      (target.getFullYear() - now.getFullYear()) * 12 +
        (target.getMonth() - now.getMonth()),
    );

    if (diffMonth >= -11) {
      return rtf.format(diffMonth, "month");
    }

    // 위의 로직을 다 통과하면 년도의 차이만 비교
    const diffYear = target.getFullYear() - now.getFullYear();
    return rtf.format(diffYear, "year");
  },
};
