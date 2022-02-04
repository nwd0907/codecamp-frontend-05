import { useEffect, useState } from "react";
import axios from "axios";

export default function OpenapiPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      //   console.log(result.data.message);
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <div>
      <div>오픈API 연습!!!</div>
      <img src={dogUrl} />
    </div>
  );
}
