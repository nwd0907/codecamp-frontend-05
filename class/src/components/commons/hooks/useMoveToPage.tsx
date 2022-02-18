import { useRouter } from "next/router";
import { useState } from "react";

// 인터페이스 선언 병합
// interface AAA {
//     name: string
//     age: number
// }
// interface AAA {
//     school: string
// }

// 유니온 타입
type IPage = "/board" | "/market" | "/mypage";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return {
    moveToPage,
    visitedPage,
  };
}
