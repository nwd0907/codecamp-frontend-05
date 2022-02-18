export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };

  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    // const aaa = document.cookie;
    // console.log(aaa); // aaa=철수; zzz=맹구 => 세미콜론(;)이 붙어서 나옴

    const aaa = document.cookie //
      .split("; ") // ["aaa=철수", "zzz=맹구"]
      .filter((el) => el.startsWith("aaa="))[0]; // ["aaa=철수"][0]
    const result = aaa.replace("aaa=", "");
    console.log(result);
  };

  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>
      ========================
      <button onClick={onClickGetCookie}>쿠키 조회</button>
      <button onClick={onClickGetLocal}>로컬 조회</button>
      <button onClick={onClickGetSession}>세션 조회</button>
    </div>
  );
}
