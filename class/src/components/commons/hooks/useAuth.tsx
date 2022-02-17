import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요!!!");
      router.push("/23-04-login-check");
    } else {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
  };
}
