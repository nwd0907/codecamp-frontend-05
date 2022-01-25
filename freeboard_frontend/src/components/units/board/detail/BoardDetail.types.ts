import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
