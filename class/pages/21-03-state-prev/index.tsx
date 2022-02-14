import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // 1. 화살표함수
    // setCount((prev) => prev + 1);

    // 2. 그냥함수
    // setCount(function (prev) {
    //   // 로직도 추가 가능 ...
    //   // 로직도 추가 가능 ...
    //   // 로직도 추가 가능 ...
    //   return prev + 1;
    // });

    // 3. 매개변수 바꿔보기
    setCount((askldklqwjfklwej) => askldklqwjfklwej + 1);
  };

  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가!!!</button>
    </div>
  );
}
