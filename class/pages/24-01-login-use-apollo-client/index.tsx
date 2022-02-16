import { useMutation, gql, useQuery, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, // Omit => 특정 데이터 빼고 나머지 다가져와줘 // Partial => ? 붙여서 가져와줘
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      // 로그인하기
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";

      // 유저정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      // 글로벌스테이트에 저장하기
      if (setAccessToken) setAccessToken(accessToken);
      if (setUserInfo) setUserInfo(userInfo);

      // refreshToken 배우기 전까지 임시로 저장해놓기
      localStorage.setItem("accessToken", accessToken || "");
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // 잘 들어가 있는지 확인하기
      console.log("==========================");
      console.log(localStorage.getItem("accessToken"));
      console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      console.log("==========================");

      // 로그인 성공 페이지로 이동하기!!
      router.push("/23-05-login-check-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기!!!</button>
    </div>
  );
}
