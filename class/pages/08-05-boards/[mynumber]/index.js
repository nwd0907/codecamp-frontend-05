import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function BoardsDetailPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.mynumber) }
    })

    console.log(data)

    const onClickMoveToEdit = () => {
        router.push(`/08-05-boards/${router.query.mynumber}/edit`)
    }

    return (
        <div>
            <div>{router.query.mynumber}번 게시글 페이지 이동 완료!!!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </div>
    )

}