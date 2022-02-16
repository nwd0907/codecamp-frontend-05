export default function Input01(props) {
  return <input maxLength type={props.type} {...props.register} />;
}
