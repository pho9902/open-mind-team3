export function generatePage(currentPage, totalPage) {
  if (totalPage <= 5) {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  let start = currentPage - 2;
  let end = currentPage + 2;

  if (start < 1) {
    start = 1;
    end = 5;
  }

  if (end > totalPage) {
    end = totalPage;
    start = totalPage - 4;
  }

  return Array.from({ length: 5 }, (_, i) => start + i);
}
