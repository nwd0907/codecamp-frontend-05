import axios from "axios";
import { useEffect } from "react";

export default function OpengraphPreview() {
  useEffect(() => {
    const getOpengraph = async () => {
      const result = await axios.get("https://www.gmarket.co.kr/"); // daume.net 등은 CORS 차단 당하므로 백엔드에서 요청하는것이 일반적
      //   console.log(result.data);
      //   console.log(result.data.split("<meta "));

      //   console.log(
      //     result.data.split("<meta ").filter((el) => el.includes("og:"))
      //   );

      const opengraph = result.data
        .split("<meta ")
        .filter((el) => el.includes("og:url"))[0]
        .split(" ");
      console.log(
        opengraph[1].replaceAll('content="', "").replaceAll('"/>', "")
      );
    };
    getOpengraph();
  }, []);

  return <div></div>;
}
