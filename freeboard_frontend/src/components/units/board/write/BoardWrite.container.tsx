import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IMyUpdateBoardInput } from "./BoardWrite.types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setMyWriterError("");
    }

    if (event.target.value && myPassword && myTitle && myContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setMyPasswordError("");
    }

    if (myWriter && event.target.value && myTitle && myContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
    if (event.target.value !== "") {
      setMyTitleError("");
    }

    if (myWriter && myPassword && event.target.value && myContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
    if (event.target.value !== "") {
      setMyContentsError("");
    }

    if (myWriter && myPassword && myTitle && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  async function onClickSubmit() {
    if (myWriter === "") {
      setMyWriterError("작성자를 입력해주세요.");
    }
    if (myPassword === "") {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    if (myTitle === "") {
      setMyTitleError("제목을 입력해주세요.");
    }
    if (myContents === "") {
      setMyContentsError("내용을 입력해주세요.");
    }
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents,
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async function onClickUpdate() {
    if (
      !myTitle &&
      !myContents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      Modal.error({ content: "하나는 입력해야합니다." });
      return;
    }

    if (!myPassword) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (myTitle) myUpdateBoardInput.title = myTitle;
    if (myContents) myUpdateBoardInput.contents = myContents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      myUpdateBoardInput.boardAddress = {};
      if (zipcode) myUpdateBoardInput.boardAddress.zipcode = zipcode;
      if (address) myUpdateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myUpdateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          boardId: router.query.aaa,
          password: myPassword,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      Modal.success({ content: "수정이 완료되었습니다." });
      router.push(`/boards/${router.query.aaa}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <BoardWriteUI
      data={props.data}
      isEdit={props.isEdit}
      isActive={isActive}
      myWriterError={myWriterError}
      myPasswordError={myPasswordError}
      myTitleError={myTitleError}
      myContentsError={myContentsError}
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  );
}
