import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            number
            writer
            title
            createdAt
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    width: 20%;
`;

export default function MapCheckboxDeletePage() {
    const [editList, setEditList] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const [deleteBoard] = useMutation(DELETE_BOARD);
    const { data } = useQuery(FETCH_BOARDS);

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };

    const onClickEditList = (event) => {
        const aaa = editList;
        aaa[event.target.id] = true;
        console.log(aaa);
        setEditList([...aaa]);
    };

    return (
        <div>
            {data?.fetchBoards.map((el, index) => (
                <BoardsItem />
            ))}
        </div>
    );
}
