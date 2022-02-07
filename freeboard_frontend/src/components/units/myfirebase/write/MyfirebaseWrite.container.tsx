import { ChangeEvent, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import MyfirebaseWriteUI from "./MyfirebaseWrite.presenter";
import { useRouter } from "next/router";

export default function MyfirebaseWrite() {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  async function onClickSubmit() {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: myWriter,
      title: myTitle,
      contents: myContents,
    });
    alert("게시물 등록에 성공하였습니다!");
    router.push("/myfirebase");
  }

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
  }
  function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event.target.value);
  }
  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);
  }

  return (
    <MyfirebaseWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
