import axios from "axios";

export default function GraphqlRestPage() {
  const onClickGraphql = () => {
    axios.post("http://backend05.codebootcamp.co.kr/graphql", {
      query: `
        mutation createBoard { 
            createBoard(
                createBoardInput: { 
                    writer: "철수", 
                    password: "1234", 
                    title: "제목", 
                    contents: "내용" 
                }
            ){ 
                _id, 
                writer
            }   
        }`,
    });
  };

  return <button onClick={onClickGraphql}>그래프큐엘 Axios 테스트!!!</button>;
}
