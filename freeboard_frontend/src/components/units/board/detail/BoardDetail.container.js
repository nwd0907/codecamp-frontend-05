import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from './BoardDetail.queries'

export default function BoardDetail(){
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: String(router.query.aaa) } 
    });

    return <BoardDetailUI data={data}/>
}