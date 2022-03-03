import { useRouter } from "next/router";

export default function CypressIntegrationTestPage1() {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/34-05-cypress-integration-test-2");
  };

  return <button onClick={onClickButton}>철수랑 놀러가기</button>;
}
