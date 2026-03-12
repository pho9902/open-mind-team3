import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useDeviceType } from "@/hooks/useDeviceType";
import { ArrowUpIcon } from "@/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";

import * as S from "@/components/containers/List/ListMain/ListMain.style";
import ListCard from "@/components/containers/List/ListCard/ListCard";
import Pagination from "@/components/common/Pagination/index";
import InfiniteScrollObserver from "@/components/common/InfiniteScroll/InfiniteScrollObserver";

export default function ListMain() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "최유리", imageSource: "https://picsum.photos/600/600?random=1", questionCount: 3, createdAt: "2026-03-01T10:00:00" },
    { id: 2, name: "정민수", imageSource: "https://picsum.photos/600/600?random=2", questionCount: 8, createdAt: "2026-03-02T11:20:00" },
    { id: 3, name: "한지민", imageSource: "https://picsum.photos/600/600?random=3", questionCount: 1, createdAt: "2026-03-03T09:15:00" },
    { id: 4, name: "abc", imageSource: "https://picsum.photos/600/600?random=4", questionCount: 12, createdAt: "2026-03-04T14:10:00" },
    { id: 5, name: "유재석", imageSource: "", questionCount: 6, createdAt: "2026-03-05T16:30:00" },
    { id: 6, name: "강호동", imageSource: "", questionCount: 9, createdAt: "2026-03-06T13:40:00" },
    { id: 7, name: "박서준", imageSource: "", questionCount: 3, createdAt: "2026-03-07T08:10:00" },
    { id: 8, name: "김태리", imageSource: "", questionCount: 8, createdAt: "2026-03-07T12:50:00" },
    { id: 9, name: "이도현", imageSource: "", questionCount: 1, createdAt: "2026-03-08T09:00:00" },
    { id: 10, name: "손흥민", imageSource: "", questionCount: 12, createdAt: "2026-03-08T15:25:00" },
    { id: 11, name: "차은우", imageSource: "https://picsum.photos/600/600?random=11", questionCount: 5, createdAt: "2026-03-09T10:00:00" },
    { id: 12, name: "아이유", imageSource: "https://picsum.photos/600/600?random=12", questionCount: 20, createdAt: "2026-03-10T11:00:00" },
    { id: 13, name: "김고은", imageSource: "", questionCount: 7, createdAt: "2026-03-11T14:20:00" },
    { id: 14, name: "공유", imageSource: "", questionCount: 2, createdAt: "2026-03-12T09:45:00" },
    { id: 15, name: "장도연", imageSource: "", questionCount: 15, createdAt: "2026-03-13T16:10:00" },
    { id: 16, name: "이광수", imageSource: "", questionCount: 4, createdAt: "2026-03-14T12:30:00" },
  ]);

  const { isPC, isLargeTablet } = useDeviceType();
  const isDesktopMode = isPC || isLargeTablet;
  const LIMIT = isDesktopMode ? 8 : 6;

  const [searchParams, setSearchParams] = useSearchParams();
  const rawPage = Number(searchParams.get("page")) || 1;

  const currentPage = Math.max(1, Math.min(rawPage, totalPage));  
  const startIndex = (currentPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;
  const totalPage = Math.ceil(subjects.length / LIMIT);
  
  const [visibleCount, setVisibleCount] = useState(LIMIT);
  const [sortBy, setSortBy] = useState("createdAt");
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (value) => {
    if (sortBy !== value) {
      setSortBy(value);

      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", "1");
      setSearchParams(newParams);
    }
    setIsOpen(false);
  };
  const sortedSubjects = [...subjects].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name, "ko");
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const currentItems = sortedSubjects.slice(startIndex, endIndex);

  const loadMore = useCallback(() => {
    if (visibleCount < subjects.length) {
      setVisibleCount((prev) => {
        const nextValue = prev + 3;
        return nextValue;
      });
    }
  }, [visibleCount, subjects.length]);

  const mobileItems = sortedSubjects.slice(0, visibleCount);

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

      <S.CardGrid>
        {(isDesktopMode ? currentItems : mobileItems).map((item) =>
          item ? <ListCard key={item.id} subject={item} /> : null,
        )}
      </S.CardGrid>

      {isDesktopMode ? (
        <Pagination totalPage={totalPage} />
      ) : (
        <InfiniteScrollObserver onIntersect={loadMore} />
      )}
    </S.MainSection>
  );
}
