import { Link, useSearchParams } from "react-router-dom";

import * as S from "./Pagination.style";
import { generatePage } from "@/utils/pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons/Icons";

export default function Pagination({ totalPage = 1 }) {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const safeTotalPage = Math.max(1, totalPage);

  const pages = generatePage(currentPage, safeTotalPage);
  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(safeTotalPage, currentPage + 1);

  const createPageLink = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page);
    return `?${newParams.toString()}`;
  };

  return (
    <S.PaginationContainer>
      <S.PageItem>
        <PageArrow
          direction="prev"
          to={createPageLink(prevPage)}
          disabled={currentPage <= 1}
        />
      </S.PageItem>

      <S.PageItem>
        {pages.map((page) => (
          <PageNumber
            key={page}
            to={createPageLink(page)}
            page={page}
            isActive={currentPage === page}
          />
        ))}
      </S.PageItem>

      <S.PageItem>
        <PageArrow
          direction="next"
          to={createPageLink(nextPage)}
          disabled={currentPage >= totalPage}
        />
      </S.PageItem>
    </S.PaginationContainer>
  );
}

const PageArrow = ({ direction, to, disabled }) => {
  const icon = direction === "prev" ? <ArrowLeftIcon /> : <ArrowRightIcon />;

  return (
    <S.ArrowButton as={Link} to={to} $disabled={disabled}>
      {icon}
    </S.ArrowButton>
  );
};

const PageNumber = ({ page, to, isActive }) => (
  <S.PageButton as={Link} to={to} $isActive={isActive}>
    {page}
  </S.PageButton>
);
