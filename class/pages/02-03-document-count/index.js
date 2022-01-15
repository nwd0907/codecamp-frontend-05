export default function DocumentCount(){

    function zzz(){
        const aaa = Number(document.getElementById("qqq").innerText) + 1
        document.getElementById("qqq").innerText = aaa
    }

    return (
        <div>
            <div id="qqq">0</div>
            <button onClick={zzz}>카운트 증가!!</button>
        </div>
    )
}