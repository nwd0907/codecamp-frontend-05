import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 20%;
`

export default function MapCheckboxPage(){
    const { data } = useQuery(FETCH_BOARDS)

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                </Row>
            ))}
        </div>
    )

}