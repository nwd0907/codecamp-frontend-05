import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionLifecycleRefPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(0);

  // componentDidMount와 동일!!!
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    // componentWillUnmount와 동일!!!
    return () => {
      console.log("여기서 나갈래요!!!");
    };
  }, []);

  // componentDidUpdate와 비슷!!!
  useEffect(() => {
    console.log("수정되고 다시그려짐!!!!!");
  }, [count]);

  // useEffect의 잘못된 사용 예(1.추가리렌더링, 2.무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    console.log(count);
    setCount((prev) => prev + 1);
    console.log("카운터를 클릭하셨습니다!!!");
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게?!"); // componentDidMount, useEffect와 비교하기

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}

// class 공통기능 {
//     hp=1000

//     attack(){
//         console.log('공격하자')
//     }
// }

// class 지상Monster extends 공통기능 {
//    run(){
//        console.log('뛰어서 도망가기')
//    }
// }

// class 공중Monster extends 공통기능 {
//     run(){
//         console.log('날라서 도망가기')
//     }ㄱ
// }
