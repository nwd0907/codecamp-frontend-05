import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function BoardsEditPage() {
    const router = useRouter()

    // 1. router.query.mynumber로 해당 게시글 fetchBoard
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.mynumber) }
    })

    return <BoardWrite isEdit={true} data={data} />
}