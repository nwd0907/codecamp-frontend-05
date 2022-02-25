import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

export default function ImageUploadSubmitPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log(file);
      if (!file) {
        alert("파일이 없습니다!");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          console.log(data.target?.result);
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    // 1. 각각보내기 연습!!
    // const start1 = performance.now();
    // await uploadFile({
    //   variables: {
    //     file: files[0],
    //   },
    // });
    // await uploadFile({
    //   variables: {
    //     file: files[1],
    //   },
    // });
    // await uploadFile({
    //   variables: {
    //     file: files[2],
    //   },
    // });
    // const end1 = performance.now();
    // console.log(end1 - start1);

    // 1. image업로드해서 url 받아오기
    //    - uploadFile()
    const start = performance.now();
    const results = await Promise.all(
      files?.map(
        (el) =>
          el &&
          uploadFile({
            variables: {
              file: el,
            },
          })
      )
    );
    console.log(results);
    const resultUrls = results.map((el) =>
      el?.data ? el.data?.uploadFile.url : ""
    );
    console.log(resultUrls);
    const end = performance.now();
    console.log(end - start);

    // 2. createBoard로 게시물 등록하기
    //    - writer, title, contents 전송,
    //    - imageurl 전송
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~~",
          contents: "이미지 업로드 입니다@@@",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <div>
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
