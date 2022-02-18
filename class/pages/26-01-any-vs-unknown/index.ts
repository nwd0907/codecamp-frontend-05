// 1. any 타입 (그냥 자바스크립트랑 같음)
export const getAny = (args: any) => {
  const answer = args + 2;
  return answer;
};
const myResult1 = getAny("철수");
console.log(myResult1);

// 2. unknown 타입 (개발자에게 안전하게 코딩하도록 유도!!)
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    const answer = args + 2;
    return answer;
  } else {
    return "숫자를 넣어주세요!!!";
  }
};
const myResult2 = getUnknown("철수");
console.log(myResult2);
