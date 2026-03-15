import { Skeleton } from "@/components/common/Skeleton/Skeleton.style";

import * as S from "@/components/containers/List/SkeletonList/SkeletonList.style";

export default function SkeletonList() {
  return (
    <S.Container>
      {Array.from({ length: 8 }).map((_, index) => (
        <S.CardWrapper key={index}>
          <Skeleton borderRadius="9999px" className="userImgSkeleton" />
          <Skeleton height="25px" />
          <S.CardFooter>
            <Skeleton width="60%" height="25px" />
            <Skeleton width="30%" height="25px" />
          </S.CardFooter>
        </S.CardWrapper>
      ))}
    </S.Container>
  );
}
