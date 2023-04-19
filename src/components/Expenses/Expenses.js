import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState("2020");

  const expenseItmes = props.items.map((item, key) => {
    return (
      <ExpenseItem
        key={key}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">{expenseItmes}</Card>;
    </div>
  );
};

export default Expenses;
