import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickWrite: () => void;
  myContents: string;
}
