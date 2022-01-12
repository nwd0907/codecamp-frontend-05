export default function LetCount(){

    let count = 0

    function zzz(){
        count = count + 1
        console.log('현재카운트' + count)
        document.getElementById("qqq").innerText = count
    }

    return (
        <div>
            <div id="qqq">0</div>
            <button onClick={zzz}>카운트 증가!!</button>
        </div>
    )
}