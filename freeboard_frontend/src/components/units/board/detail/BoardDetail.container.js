import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries'

export default function BoardDetail(){
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: String(router.query.aaa) } 
    });

    
    const onClickMoveToList = () => {
        router.push("/boards")
    }
    
    const onClickMoveToEdit = () => {
        router.push(`/boards/${router.query.aaa}/edit`)
    }
    
    const onClickDelete = async () => {
        try {
            await deleteBoard({
                variables: { boardId: String(router.query.aaa) }
            })   
            alert('삭제가 완료되었습니다.')
            router.push(`/boards`)
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <BoardDetailUI 
            data={data}
            onClickMoveToList={onClickMoveToList}
            onClickMoveToEdit={onClickMoveToEdit}
            onClickDelete={onClickDelete}
        />
    )
}