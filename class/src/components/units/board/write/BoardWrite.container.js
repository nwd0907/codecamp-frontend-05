import axios from 'axios'
import {useState} from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
    const [isActive, setIsActive] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [aaa, setAaa] = useState("")
    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")
        const result = await qqq({ 
            variables: { writer: myWriter, title:"제목입니다~", contents: "내요이에요~~" } 
        })
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
        if(event.target.value && myTitle && myContents){
            setIsActive(true)
        }
    }

    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
        if(myWriter && event.target.value && myContents){
            setIsActive(true)
        }
    }

    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
        if(myWriter && myTitle && event.target.value){
            setIsActive(true)
        }
    }

    return (
        <BoardWriteUI 
            bbb={aaa}
            ccc={zzz}
            ddd={onChangeMyWriter}
            eee={onChangeMyTitle}
            fff={onChangeMyContents}
            isActive={isActive}
        />
    )

}