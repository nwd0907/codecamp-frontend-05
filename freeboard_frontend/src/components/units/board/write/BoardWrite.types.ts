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
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
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
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  fileUrls: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
