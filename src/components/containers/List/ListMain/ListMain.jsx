import { useState } from "react";

import * as S from "@/components/containers/List/ListMain/ListMain.style";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons/Icons";
import ListCard from "@/components/containers/List/ListCard/ListCard";
// import InfiniteScrollObserver from "@/components/common/InfiniteScroll";

export default function ListMain() {
  const [subjects, setSubjects] = useState([
     { id: 7, name: "최유리2026-03-01", imageSource: "", questionCount: 3, createdAt: "2026-03-01T10:00:00" },
  { id: 8, name: "정민수2026-03-02", imageSource: "", questionCount: 8, createdAt: "2026-03-02T11:20:00" },
  { id: 9, name: "한지민2026-03-04", imageSource: "", questionCount: 1, createdAt: "2026-03-03T09:15:00" },
  { id: 10, name: "abc2026-03-05", imageSource: "", questionCount: 12, createdAt: "2026-03-04T14:10:00" },
  { id: 11, name: "유재석2026-03-05", imageSource: "", questionCount: 6, createdAt: "2026-03-05T16:30:00" },
  { id: 12, name: "강호동2026-03-06", imageSource: "", questionCount: 9, createdAt: "2026-03-06T13:40:00" },
  { id: 71, name: "박서준2026-03-07", imageSource: "", questionCount: 3, createdAt: "2026-03-07T08:10:00" },
  { id: 81, name: "김태리2026-03-07", imageSource: "", questionCount: 8, createdAt: "2026-03-07T12:50:00" },
  { id: 91, name: "이도현2026-03-08", imageSource: "", questionCount: 1, createdAt: "2026-03-08T09:00:00" },
  { id: 101, name: "x2026-03-08", imageSource: "", questionCount: 12, createdAt: "2026-03-08T15:25:00" }
 ] );

  const [sortBy, setSortBy] = useState("createdAt");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 868 : true,
  );
  const handleSortClick = (value) => {
    setSortBy(value);
    setIsOpen(false);
    setCurrentPage(1);
  };
  const sortedSubjects = [...subjects].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name, "ko");
    }
    return new Date(b.createdAt)-new Date(a.createdAt);
  });

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
        {sortedSubjects.map((item) =>
          item ? <ListCard key={item.id} subject={item} /> : null,
        )}
      </S.CardGrid>

      {/* 4. 하단 기능 분기 */}
      {isDesktop ? (
        <div>{/* 여기에 페이지네이션 컴포넌트 추가 */}</div>
      ) : (
        <div>{/* 여기에 무한 스크롤 타겟 추가 */}</div>
      )}
    </S.MainSection>
  );
}
