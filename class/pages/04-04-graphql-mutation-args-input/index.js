import axios from 'axios'
import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationArgsInput(){
    const [myWriter, setMyWriter] = useState("")

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
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" /><br />
            내용: <input type="text" /><br />
            <button onClick={zzz}>GRAPHQL-API 요청하기!!!</button>
            <div>{aaa}</div>
        </>
    )

}