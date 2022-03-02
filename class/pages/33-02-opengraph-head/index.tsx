import Head from "next/head";

export default function OpengraphHeadPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="내사이트" />
        <meta property="og:description" content="환영합니다" />
      </Head>
      <div>오픈그래프 연습 페이지입니다!!!</div>
    </div>
  );
}
