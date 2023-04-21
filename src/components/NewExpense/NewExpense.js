import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    clickButtonHandler();
  };

  const clickButtonHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={clickButtonHandler}
        />
      ) : (
        <button onClick={clickButtonHandler}>Add New Expense</button>
      )}

      {/* 
      해당 방법 으로도 표현이 가능하다.
      {!showExpenseForm && (
        <button onClick={clickButtonHandler}>Add New Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          clickButtonHandler={clickButtonHandler}
        />
      )} */}
    </div>
  );
};

export default NewExpense;
