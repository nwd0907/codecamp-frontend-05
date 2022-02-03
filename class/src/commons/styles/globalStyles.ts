import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-size: 10px;
    font-family: "myFont";
  }

  @font-face {
    font-family: "myFont";
    src: url("/fonts/scifibit.ttf");
  }
`;
