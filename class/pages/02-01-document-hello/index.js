export default function LetHello(){

    let qqq = "반갑습니다"
    // const aaa = "안녕하세요"

    function zzz(){
        document.getElementById("qqq").innerText = qqq
    }

    return (
        <div>
            <div id="qqq">안녕하세요</div>
            <button onClick={zzz}>클릭!!</button>
        </div>
    )

}