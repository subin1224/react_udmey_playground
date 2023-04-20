import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const expenseItems = filteredExpenses.map((item) => {
        return (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expenseItems}
            </Card>;
        </div>
    );
};

export default Expenses;
