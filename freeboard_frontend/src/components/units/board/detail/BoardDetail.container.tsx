import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.aaa) } }
  );

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.aaa}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.aaa) },
      });
      alert("삭제가 완료되었습니다.");
      router.push(`/boards`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.aaa) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.aaa } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.aaa) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.aaa } },
      ],
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
