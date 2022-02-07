import { ChangeEvent } from "react";

export interface IMyfirebaseWriteUIProps {
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
