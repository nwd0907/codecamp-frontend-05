import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return <input type={props.type} {...props.register} />;
}
