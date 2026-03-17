import * as S from "./ListPage.style";
import ListHeader from "@/components/containers/List/ListHeader/ListHeader";
import ListMain from "@/components/containers/List/ListMain/ListMain";

export default function ListPage() {
  return (
    <S.Container>
      <ListHeader />
      <ListMain />
    </S.Container>
  );
}
