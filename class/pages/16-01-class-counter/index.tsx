import { Component } from "react";

interface IState {
  count: number;
}
export default class ClassCounterPage extends Component {
  state = {
    count: 20,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log("카운터를 클릭하셨습니다!!!");
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
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
