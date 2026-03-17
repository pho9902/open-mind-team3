import { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useDeviceType } from "@/hooks/useDeviceType";
import { ArrowUpIcon } from "@/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";
import { subjectApi } from "@/apis/subject";
import { LoadingSpinner } from "@/assets/icons/LoadingSpinnerIcon";
import { openToast } from "@/utils/toast";

import * as S from "@/components/containers/List/ListMain/ListMain.style";
import ListCard from "@/components/containers/List/ListCard/ListCard";
import Pagination from "@/components/common/Pagination/index";
import InfiniteScrollObserver from "@/components/common/InfiniteScroll/InfiniteScrollObserver";
import SkeletonList from "@/components/containers/List/SkeletonList/SkeletonList";

export default function ListMain() {
  const [subjects, setSubjects] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [loadedPage, setLoadedPage] = useState(1);

  const { isPC, isLargeTablet } = useDeviceType();
  const isDesktopMode = isPC || isLargeTablet;
  const LIMIT = isDesktopMode ? 8 : 6;

  const [searchParams, setSearchParams] = useSearchParams();
  const rawPage = Number(searchParams.get("page")) || 1;
  const totalPage = Math.ceil(totalCount / LIMIT);

  const currentPage = Math.max(1, Math.min(rawPage, totalPage));

  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem("sortBy") || "createdAt";
  });
  const [isOpen, setIsOpen] = useState(false);

  const sortedSubjects = (data) => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name, "ko");
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };

  const fetchSubject = useCallback(async () => {
    setIsFirstLoading(true);
    setShowSpinner(false);
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 1000);

    try {
      const response = await subjectApi.getFeedList(1000, 0);
      const { count, results } = response;
      setTotalCount(count);
      setSubjects(sortedSubjects(results));
    } catch (error) {
      openToast.error("데이터를 불러오는 데 실패했습니다");
    } finally {
      clearTimeout(timer);
      setIsFirstLoading(false);
      setShowSpinner(false);
    }
  }, [sortBy]);

  useEffect(() => {
    fetchSubject();
  }, [fetchSubject, currentPage]);

  const handleSortClick = (value) => {
    if (sortBy !== value) {
      setSortBy(value);
      localStorage.setItem("sortBy", value);
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", "1");
      setSearchParams(newParams);
    }
    setIsOpen(false);
  };

  const displaySubjects = isDesktopMode
    ? subjects?.slice((currentPage - 1) * LIMIT, currentPage * LIMIT)
    : subjects?.slice(0, loadedPage * LIMIT);

  const loadMore = useCallback(() => {
    if (loadedPage < totalPage) {
      setLoadedPage((prev) => prev + 1);
    }
  }, [loadedPage, totalPage]);

  return (
    <S.MainSection>
      <S.MainHeader>
        <h1>누구에게 질문할까요?</h1>

        <S.SelectContainer>
          <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
            {sortBy === "createdAt" ? "최신순" : "이름순"}
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </S.SelectButton>

          {isOpen && (
            <S.OptionList>
              <S.OptionItem onClick={() => handleSortClick("createdAt")}>
                최신순
              </S.OptionItem>
              <S.OptionItem onClick={() => handleSortClick("name")}>
                이름순
              </S.OptionItem>
            </S.OptionList>
          )}
        </S.SelectContainer>
      </S.MainHeader>
      {isFirstLoading && displaySubjects.length == 0 ? (
        <SkeletonList />
      ) : (
        <>
          <S.CardGrid $isLoading={showSpinner}>
            {displaySubjects.map((item) =>
              item ? <ListCard key={item.id} subject={item} /> : null,
            )}
          </S.CardGrid>
          {showSpinner && (
            <S.SpinnerWrapper>
              <LoadingSpinner />
            </S.SpinnerWrapper>
          )}
        </>
      )}
      {isDesktopMode ? (
        <Pagination totalPage={totalPage} />
      ) : (
        displaySubjects.length < totalCount && (
          <InfiniteScrollObserver onIntersect={loadMore} />
        )
      )}
    </S.MainSection>
  );
}
