import { gql, useQuery } from "@apollo/client";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]"); // [{_id: 1, writer: 영희}, {_id: 2, writer: 훈이}, {_id: 3, writer: 철수}]
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </div>
  );
}
