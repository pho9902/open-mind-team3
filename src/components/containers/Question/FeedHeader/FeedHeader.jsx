import styled from "styled-components";

const FeedHeader = styled.div`
  width: 100%;
  height: 234px;
  position: relative;
  margin-bottom: 190px;

  // background-image로 변경 예정
  background-color: ${({ theme }) => theme.colors.brown30};
`;

export default FeedHeader;
