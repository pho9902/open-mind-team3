import HomeForm from "@/components/containers/Home/HomeForm/HomeForm";
import HomeHeader from "@/components/containers/Home/HomeHeader/HomeHeader";

import * as S from "./HomePage.style";

export default function HomePage() {
  return (
    <S.HomeContainer>
      <HomeHeader />

      <HomeForm />
    </S.HomeContainer>
  );
}
