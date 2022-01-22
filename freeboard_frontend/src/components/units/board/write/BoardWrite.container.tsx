import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from "next/router";
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(props){
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
    const [updateBoard] = useMutation(UPDATE_BOARD);
  
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

    async function onClickUpdate() {
      if(!myTitle && !myContents){
        alert('둘중 하나는 입력해야합니다.')
        return
      }

      if(!myPassword){
        alert("비밀번호 입력해주세요")
        return
      }

      interface IMyUpdateBoardInput {
        title?: string
        contents?: string
      }
      const myUpdateBoardInput: IMyUpdateBoardInput = {}
      if(myTitle) myUpdateBoardInput.title = myTitle
      if(myContents) myUpdateBoardInput.contents = myContents

      try {
        await updateBoard({
          variables: {
            boardId: router.query.aaa,
            password: myPassword,
            updateBoardInput: myUpdateBoardInput
          },
        });
        alert("수정이 완료되었습니다.")
        router.push(`/boards/${router.query.aaa}`);
      } catch (error) {
        alert(error.message);
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
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
      />
    )
}