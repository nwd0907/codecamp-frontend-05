import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI(props: IBoardWriteUIProps){   
    return (
        <>
            <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
            작성자: <S.MyInput type="text" onChange={props.ddd} defaultValue={props.data?.fetchBoard.writer} /><br />
            제목: <S.MyInput type="text" onChange={props.eee} defaultValue={props.data?.fetchBoard.title} /><br />
            내용: <S.MyInput type="text" onChange={props.fff} defaultValue={props.data?.fetchBoard.contents} /><br />
            <S.MyButton 
                onClick={props.isEdit ? props.xxx : props.ccc}
                ggg={props.isActive}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </S.MyButton>

            {/* {props.isEdit ? (
                <S.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</S.MyButton>
            ) : (
                <S.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</S.MyButton>
            )}

            {props.isEdit && <S.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</S.MyButton>}
            {!props.isEdit && <S.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</S.MyButton>} */}


            <div>{props.bbb}</div>
        </>
    )

}