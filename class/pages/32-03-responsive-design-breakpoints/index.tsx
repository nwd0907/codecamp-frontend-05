import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const MWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    width: 6.25rem;
    height: 100px;
    background-color: blue;
    display: block;
  }
`;

export default function ResponsiveDesignPage() {
  return (
    <div>
      <MWrapper>M</MWrapper>
      <Wrapper>내비게이션</Wrapper>
    </div>
  );
}
