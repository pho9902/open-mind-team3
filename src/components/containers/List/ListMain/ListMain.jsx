import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import * as S from "@/components/containers/List/ListMain/ListMain.style";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons/Icons";
import ListCard from "@/components/containers/List/ListCard/ListCard";
import { useDeviceType } from "@/components/common/Hook/useDeviceType";
import Pagination from "@/components/common/Pagination/index";

// import InfiniteScrollObserver from "@/components/common/InfiniteScroll";


export default function ListMain() {
  const [subjects, setSubjects] = useState([
  { id: 7, name: "최유리", imageSource: "https://picsum.photos/600/600", questionCount: 3, createdAt: "2026-03-01T10:00:00" },
  { id: 8, name: "정민수", imageSource: "https://picsum.photos/600/600", questionCount: 8, createdAt: "2026-03-02T11:20:00" },
  { id: 9, name: "한지민", imageSource: "https://picsum.photos/600/600", questionCount: 1, createdAt: "2026-03-03T09:15:00" },
  { id: 10, name: "abc", imageSource: "https://picsum.photos/600/600", questionCount: 12, createdAt: "2026-03-04T14:10:00" },
  { id: 11, name: "유재석", imageSource: "", questionCount: 6, createdAt: "2026-03-05T16:30:00" },
  { id: 12, name: "강호동", imageSource: "", questionCount: 9, createdAt: "2026-03-06T13:40:00" },
  { id: 71, name: "박서준", imageSource: "", questionCount: 3, createdAt: "2026-03-07T08:10:00" },
  { id: 81, name: "김태리", imageSource: "", questionCount: 8, createdAt: "2026-03-07T12:50:00" },
  { id: 91, name: "이도현", imageSource: "", questionCount: 1, createdAt: "2026-03-08T09:00:00" },
  { id: 101, name: "x", imageSource: "", questionCount: 12, createdAt: "2026-03-08T15:25:00" }
 ] );

  const LIMIT = 8;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const startIndex = (currentPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;

  const [sortBy, setSortBy] = useState("createdAt");
  const [isOpen, setIsOpen] = useState(false);

  const { isPC, isLargeTablet } = useDeviceType(); 
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
    return new Date(b.createdAt)-new Date(a.createdAt);
  });

  const currentItems = sortedSubjects.slice(startIndex, endIndex);

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
        {currentItems.map((item) =>
          item ? <ListCard key={item.id} subject={item} /> : null,
        )}
      </S.CardGrid>

      {(isPC || isLargeTablet) ? (
        <Pagination totalPage={Math.ceil(subjects.length / 8)} />
      ) : (
        <div>{/* 여기에 무한 스크롤 타겟 추가 */}</div>
      )}
    </S.MainSection>
  );
}
