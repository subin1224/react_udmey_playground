import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
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

  return <Card className="expenses">{expenseItmes}</Card>;
};

export default Expenses;
