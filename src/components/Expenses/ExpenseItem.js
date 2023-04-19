import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // 리액트의 컴포넌트에는 컴포넌트 안에 반환하는 이 html파일 즉 이 jsx 코드 안에
  // 반환하는 문장 마다 또는 jsx 코드 조각 마다 반드시 한개의 루트 요소를 갖는다.

  // 가장 간단한 방법
  // * class 대신 className 을 써야 한다.

  // function clickHandler() {}

  // State
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    // setTitle 함수를 실행한다 해서 바로 title이 변경 되는 것이 아니다. '예약'을 걸어놓는 것
    // 따라서 오래된 값이 console에 찍히게 된다.
    // 해당 함수를 호출 후 컴포넌트 함수가 다시 호출하게 되어 화면엔 새로운 title이 보여진다
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
