import axios from "axios";

export default function CallbackPromiseAsyncawaitPage() {
    const onClickCallback = () => {
        const aaa = new XMLHttpRequest();
        aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
        aaa.send();
        aaa.addEventListener("load", (res: any) => {
            const num = res.target.response.split(" ")[0]; // 71(랜덤숫자)

            const bbb = new XMLHttpRequest();
            bbb.open("get", `http://koreanjson.com/posts/${num}`);
            bbb.send();
            bbb.addEventListener("load", (res: any) => {
                const userId = JSON.parse(res.target.response).UserId;

                const ccc = new XMLHttpRequest();
                ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
                ccc.send();
                ccc.addEventListener("load", (res: any) => {
                    console.log("최종결과값!!!!!");
                    console.log(JSON.parse(res.target.response));
                });
            });
        });
    };

    // const result = new Promise((resolve, reject) => {

    //     const ccc = new XMLHttpRequest();
    //     ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
    //     ccc.send();
    //     ccc.addEventListener("load", (res: any) => {

    //         resolve("철수")
    //     });
    // }).then((res) => {  })

    const onClickPromise = () => {
        console.log("여기는 1번입니다!!!");
        axios
            .get("http://numbersapi.com/random?min=1&max=200")
            .then((res) => {
                console.log("여기는 2번입니다!!!");
                const num = res.data.split(" ")[0]; // 71(랜덤숫자)
                return axios.get(`http://koreanjson.com/posts/${num}`);
            })
            .then((res) => {
                console.log("여기는 3번입니다!!!");
                const userId = res.data.UserId;
                // prettier-ignore
                return axios.get(`http://koreanjson.com/posts?userId=${userId}`)
            })
            .then((res) => {
                console.log("여기는 4번입니다!!!");
                console.log(res);
            });
        console.log("여기는 5번입니다!!!");
    };

    const onClickAsyncAwait = async () => {
        // prettier-ignore
        const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200")
        const num = res1.data.split(" ")[0]; // 71(랜덤숫자)

        const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
        const userId = res2.data.UserId;

        // prettier-ignore
        const res3 = await axios.get(`http://koreanjson.com/posts?userId=${userId}`)
        console.log(res3);
    };

    return (
        <div>
            <button onClick={onClickCallback}>Callback 요청하기!!</button>
            <button onClick={onClickPromise}>Promise 요청하기!!</button>
            <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!!</button>
        </div>
    );
}
