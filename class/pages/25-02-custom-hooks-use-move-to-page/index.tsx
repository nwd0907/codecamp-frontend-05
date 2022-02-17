import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPagePage() {
  const { moveToPage } = useMoveToPage();

  return (
    <div>
      <div>커스텀훅 연습!! - 페이지 이동</div>
      <button onClick={moveToPage("/board")}>게시판으로 이동</button>
      <button onClick={moveToPage("/market")}>마켓으로 이동</button>
      <button onClick={moveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}
