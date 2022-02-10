import { ChangeEvent, useEffect, useState } from "react";
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
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeMyWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setMyWriterError("");
    }

    if (event.target.value && myPassword && myTitle && myContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeMyPassword = (event) => {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setMyPasswordError("");
    }

    if (myWriter && event.target.value && myTitle && myContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeMyTitle = (event) => {
    setMyTitle(event.target.value);
    if (event.target.value !== "") {
      setMyTitleError("");
    }

    if (myWriter && myPassword && event.target.value && myContents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeMyContents = (event) => {
    setMyContents(event.target.value);
    if (event.target.value !== "") {
      setMyContentsError("");
    }

    if (myWriter && myPassword && myTitle && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async () => {
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
              images: fileUrls,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !myTitle &&
      !myContents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
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
    if (isChangedFiles) myUpdateBoardInput.images = fileUrls;

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
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

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
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
    />
  );
}
