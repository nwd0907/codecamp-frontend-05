// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "철수"
      title: "제목입니다~"
      contents: "내요이에요~~"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutation() {
  const [aaa, setAaa] = useState<string>("");
  const [qqq] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const zzz = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")
    const result = await qqq();
    // result.data?.createBoard?.message;
    console.log(result.data?.createBoard?.message);
    setAaa(result.data?.createBoard?.message || "아무스트링");
  };

  return (
    <>
      <button onClick={zzz}>GRAPHQL-API 요청하기!!!</button>
      <div>{aaa}</div>
    </>
  );
}
