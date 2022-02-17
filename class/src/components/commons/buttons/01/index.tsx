import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}
const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

interface IProps {
  type: "button" | "submit" | "reset";
  isValid: boolean;
  name: string;
}
export default function Button01(props: IProps) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
