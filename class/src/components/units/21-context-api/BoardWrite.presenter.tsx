import { useContext } from "react";
import { ExampleContext } from "../../../../pages/21-04-context-api";

export default function BoardWriteContextUI() {
  const { isEdit } = useContext(ExampleContext);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
