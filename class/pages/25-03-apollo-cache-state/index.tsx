import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev 안에 기존 30개 데이터가 존재 => 29개로 변경해야 함
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로 readField 사용
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // [{writer: "영희", password: "1234"}, {기존 30개}]
            },
          },
        });
      },
    });
  };

  // 1. 구조분해 할당으로 함수 파라미터 받기
  // function onClickAAA({ name, age, school }){
  //   console.log(name)
  // }

  // const child = {
  //   name: "철수",
  //   age: 13,
  //   school: "다람쥐초등학교"
  // }
  // onClickAAA(child)

  // 2. 안좋은 옛날 방식
  // function onClickAAA(name, age, school){
  //   console.log(name)
  // }

  // const name: "철수"
  // const age: 13
  // const school: "다람쥐초등학교"
  // onClickAAA(name, school)

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
