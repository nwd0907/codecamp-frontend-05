import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

export default function BoardCommentWrite() {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  function onChangeMyContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setMyContents(event.target.value);
  }

  function onChangeStar(value: number) {
    setStar(value);
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: star,
          },
          boardId: String(router.query.aaa),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.aaa) },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContents={onChangeMyContents}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      myContents={myContents}
    />
  );
}
