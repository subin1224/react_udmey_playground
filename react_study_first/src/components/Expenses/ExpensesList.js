import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenseItems = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  // 만약 다양한 조건에서 컴포넌트가 반환하는 것이 전부 바뀐다면 해당과 같은 방법을 쓸 수도 있다.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return <ul className="expenses-list">{expenseItems}</ul>;
};

export default ExpensesList;
