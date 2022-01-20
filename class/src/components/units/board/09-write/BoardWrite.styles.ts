import styled from '@emotion/styled'

export const MyInput = styled.input``

interface IProps {
    ggg: boolean
}
export const MyButton = styled.button`
    background-color: ${(props: IProps) => props.ggg === true ? "yellow" : "none"};
`