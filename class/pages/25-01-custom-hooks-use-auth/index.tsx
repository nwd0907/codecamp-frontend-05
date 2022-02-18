import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPAge() {
  const { isLoading } = useAuth();

  if (isLoading) <></>;
  return (
    <div>
      <div>커스텀 훅 연습 페이지!! - 권한분기</div>
      <div>로그인 체크 완료!! 환영합니다!!!</div>
    </div>
  );
}
