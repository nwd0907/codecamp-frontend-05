import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from "next/router";
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
    const router = useRouter()
    
    const [isActive, setIsActive] = useState(false)

    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
  
    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");
  
    const [createBoard] = useMutation(CREATE_BOARD);
  
    function onChangeMyWriter(event) {
      setMyWriter(event.target.value);
      if (event.target.value !== "") {
        setMyWriterError("");
      }

      if(event.target.value && myPassword && myTitle && myContents){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    
    function onChangeMyPassword(event) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
        setMyPasswordError("");
      }

      if(myWriter && event.target.value && myTitle && myContents){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyTitle(event) {
      setMyTitle(event.target.value);
      if (event.target.value !== "") {
        setMyTitleError("");
      }

      if(myWriter && myPassword && event.target.value && myContents){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyContents(event) {
      setMyContents(event.target.value);
      if (event.target.value !== "") {
        setMyContentsError("");
      }

      if(myWriter && myPassword && myTitle && event.target.value){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
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
      if (myWriter !== "" && myPassword !== "" && myTitle !== "" && myContents !== "") {
        try {
          const result = await createBoard({
            variables: {
              createBoardInput: {
                writer: myWriter,
                password: myPassword,
                title: myTitle,
                contents: myContents,
              },
            },
          })
          router.push(`/boards/${result.data.createBoard._id}`)
        } catch(error) {
          console.log(error.message)
        }
      }
    }

    return (
      <BoardWriteUI 
        isActive={isActive}
        myWriterError={myWriterError}
        myPasswordError={myPasswordError}
        myTitleError={myTitleError}
        myContentsError={myContentsError}
        onChangeMyWriter={onChangeMyWriter}
        onChangeMyPassword={onChangeMyPassword}
        onChangeMyTitle={onChangeMyTitle}
        onChangeMyContents={onChangeMyContents}
        onClickSubmit={onClickSubmit}
      />
    )
}