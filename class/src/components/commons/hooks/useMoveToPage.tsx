import { useRouter } from "next/router";
import { useState } from "react";

// interface AAA {
//     name: string
//     age: number
// }

// interface AAA {
//     school: string
// }

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
