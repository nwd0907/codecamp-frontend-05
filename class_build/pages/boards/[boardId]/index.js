import { useRouter } from "next/router";

export default function BoardsDetailPage() {
  const router = useRouter();

  return (
    <div>
      안녕하세요! 게시글 상세페이지 입니다!!!, 게시글ID는 {router.query.boardId}
      입니다!!!
    </div>
  );
}
