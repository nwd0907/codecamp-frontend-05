import { useContext } from "react";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

const LoginSuccessPage = () => {
  const { userInfo } = useContext(GlobalContext);
  // const router = useRouter();
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해주세요!!!");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{userInfo?.name}님 환영합니다!!</div>;
};

export default withAuth(LoginSuccessPage);
