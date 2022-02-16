import { useForm } from "react-hook-form";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}
export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };

  //   console.log("리렌더링 체크!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("myWriter")} />
      제목: <input type="text" {...register("myTitle")} />
      내용: <input type="text" {...register("myContents")} />
      <button>등록하기</button>
      {/* <button type="button" onClick={}>나만의 버튼</button> */}
    </form>
  );
}
