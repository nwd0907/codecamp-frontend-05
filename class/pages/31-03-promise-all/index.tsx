export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise시작!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 3000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 3000);
    });
    console.log(result3);
    console.timeEnd("Promise시작!!");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나하나 각각 입력하는 방법
    // console.time("PromiseAll시작!!");
    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("영희");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("훈이");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(results);
    // console.timeEnd("PromiseAll시작!!");

    // 2. map을 사용해서 간소화하기
    console.time("PromiseAll시작!!");
    const classmates = ["철수", "영희", "훈이"];
    const results = await Promise.all(
      classmates.map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(results);
    console.timeEnd("PromiseAll시작!!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>시작하기!!</button>
      <button onClick={onClickPromiseAll}>시작하기!! (Promise.all)</button>
    </div>
  );
}
