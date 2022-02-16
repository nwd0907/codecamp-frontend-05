import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}
const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
