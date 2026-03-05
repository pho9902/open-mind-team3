import styled from "styled-components";

const FeedHeader = styled.div`
  width: 100%;
  height: 234px;
  position: relative;

  // 나중에 background-image로 변경
  background-color: ${({ theme }) => theme.colors.brown30};
`;

export default FeedHeader;
