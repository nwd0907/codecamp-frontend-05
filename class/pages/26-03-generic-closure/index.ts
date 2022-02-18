// 1. 클로저 - 기초
export function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultFunc1 = firstFunc1("영희")(10);
console.log(resultFunc1);

//
//
// 2. 클로저 - 기초(any)
export function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const resultFunc2 = firstFunc2(20)("철수");
console.log(resultFunc2);

//
//
// 3. 클로저 - 기초(generic)
export function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const resultFunc3 = firstFunc3(20)("철수");
console.log(resultFunc3);

//
//
// 4. 클로저 - 기초(generic) - 화살표함수
// prettier-ignore
export const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };
const resultFunc4 = firstFunc4(20)("철수");
console.log(resultFunc4);

//
//
// 5. 클로저 - 기초(generic) - HOC
// prettier-ignore
export const firstFunc5 = <C>(Component: C) => <P>(props: P) => {
  return [Component, props];
};
const resultFunc5 = firstFunc5("Bbb")({ aaa: "철수" });
console.log(resultFunc5);
