import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IBoardWriteUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit?: boolean;
  isActive: boolean;
  myWriterError: string;
  myPasswordError: string;
  myTitleError: string;
  myContentsError: string;
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
