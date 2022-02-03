import { Component } from "react";
import Router from "next/router";

interface IState {
  count: number;
}
export default class ClassCounterPage extends Component {
  state = {
    count: 20,
  };

  componentDidMount() {
    console.log("마운트됨!!!");
    // input 태그 선택해서 포커스 깜빡거리게 하기
  }

  componentDidUpdate() {
    console.log("수정되고 다시그려짐!!!!!");
  }

  componentWillUnmount() {
    console.log("여기서 나갈래요!!!");
    // 나가기 전에 마지막으로 할것들!!(백엔드 컴퓨터에 채팅방 나감을 알리기)
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log("카운터를 클릭하셨습니다!!!");
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}

// class 공통기능 {
//     hp=1000

//     attack(){
//         console.log('공격하자')
//     }
// }

// class 지상Monster extends 공통기능 {
//    run(){
//        console.log('뛰어서 도망가기')
//    }
// }

// class 공중Monster extends 공통기능 {
//     run(){
//         console.log('날라서 도망가기')
//     }ㄱ
// }
