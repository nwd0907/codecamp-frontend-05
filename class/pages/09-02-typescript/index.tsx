export default function TypescriptPage() {
  // 타입추론
  // let aaa = "안녕하세요"
  // aaa = 3

  // 문자타입
  // let bbb: string;
  // bbb = "반갑습니다"
  // bbb = 123

  // 숫자타입
  // let ccc: number = 5
  // ccc = "asdf"

  // 불린타입
  // let ddd: boolean
  // ddd = true
  // ddd = 123
  // ddd = "asdf"

  // 배열타입
  // let eee: number[] = [1, 2, 3, 4, 5, "안녕하세요"]
  // let fff: string[] = ["철수", "영희", "훈이", 13]
  // let ggg: (string | number)[] = [1, 2, 3, 4, "철수", "영희"]
  // let hhh: string[] | number[] = ["철수", "영희", "훈이"]
  // hhh = [1, 2, 3]

  // let mymoney: number[] | string[] = [1000, 2000, 3000];
  // mymoney = ["1000원", "2000원", "3000원"];

  // 객체타입
  // interface IProfile {
  //     name: string
  //     age: number | string
  //     school: string
  // }
  // const profile: IProfile = {
  //     name: "철수",
  //     age: 8,
  //     school: "다람쥐초등학교"
  // }
  // profile.school = 123
  // profile.age = "8살"

  // 함수타입
  // function qqq(a: number, b: number): string {
  //   // return a + b
  //   return "안녕하세요!!";
  // }

  // let result = qqq(1, 2);

  // interface(선언병합)와 type의 차이
  // interface IProps {
  //   name: string;
  //   age: number;
  // }
  // // eslint-disable-next-line no-redeclare
  // interface IProps {
  //   school: string;
  //   apple: number;
  // }
  // const aaa: IProps = {
  //   age: 13,
  //   name: "철수",
  //   school: "다람쥐초등학교",
  //   apple: 3,
  // };
  // console.log(aaa);

  return <div>타입스크립트 연습!!</div>;
}
