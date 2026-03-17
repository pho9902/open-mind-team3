import * as S from "./HomeWrapper.style";
import HomeHeader from "@/components/containers/Home/HomeHeader";
import HomeButtonContainer from "@/components/containers/Home/HomeButtonContainer";

export default function HomePage() {
  return (
    <S.HomeWrapper>
      <HomeHeader />
      <HomeButtonContainer />
    </S.HomeWrapper>
  );
}
