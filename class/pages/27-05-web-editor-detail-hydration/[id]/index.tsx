import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.id) } }
  );

  return (
    <div>
      {/* <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      {process.browser ? (
        <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      ) : (
        // <div /> 검정색 - 서버의 CSS를 그대로 전달받음
        <div style={{ color: "green" }} />
      )}
      <div style={{ color: "blue" }}>내용: 반갑습니다!!!</div> */}

      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {process.browser ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
      )}
    </div>
  );
}

// playground XSS 공격
// <img src='#' onerror='console.log(localStorage.getItem(\"myAccessToken\"))' />
