import * as S from "@/components/containers/List/ListPage.style";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons/Icons";
import ListCard from "@/components/containers/List/ListCard";

export default function ListMain() {
  const [subjects, setSubjects] = useState([
    { id: 7, name: "최유리", imageSource: "", questionCount: 3 },
    { id: 8, name: "정민수", imageSource: "", questionCount: 8 },
    { id: 9, name: "한지민", imageSource: "", questionCount: 1 },
    { id: 10, name: "오세훈", imageSource: "", questionCount: 12 },
    { id: 11, name: "유재석", imageSource: "", questionCount: 6 },
    { id: 12, name: "강호동", imageSource: "", questionCount: 9 },
    { id: 13, name: "이수민", imageSource: "", questionCount: 4 },
    { id: 14, name: "박서준", imageSource: "", questionCount: 11 },
    { id: 15, name: "김민지", imageSource: "", questionCount: 0 },
    { id: 16, name: "장동건", imageSource: "", questionCount: 13 },
    { id: 17, name: "송지효", imageSource: "", questionCount: 2 },
    { id: 18, name: "이광수", imageSource: "", questionCount: 7 },
    { id: 19, name: "정해인", imageSource: "", questionCount: 5 },
    { id: 20, name: "박보영", imageSource: "", questionCount: 14 },
  ]);

  const [sortBy, setSortBy] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 868 : true,
  );
  const handleSortClick = (value) => {
    setSortBy(value);
    setIsOpen(false);
  };

  return (
    <S.MainSection>
      <S.MainHeader>
        <h1>누구에게 질문할까요?</h1>

        <S.SelectContainer>
          <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
            {sortBy === "latest" ? "최신순" : "이름순"}
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </S.SelectButton>

          {isOpen && (
            <S.OptionList>
              <S.OptionItem onClick={() => handleSortClick("latest")}>
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
        {subjects.map((item) => (
          <ListCard key={item.id} data={item} />
        ))}
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
