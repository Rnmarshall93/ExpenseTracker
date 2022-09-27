import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [visibility, setVisibility] = useState("hidden");

  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const getForm = () => {
    if (visibility === "hidden") {
      return <button onClick={handleVisibilityToggle}>Add New Expense</button>
    } else {
      return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelItemHandler={handleVisibilityToggle}/>;
    }
  };

  const handleVisibilityToggle = (event) => {
    event.preventDefault();
    if(visibility === "hidden")
    {
      setVisibility("visible");
    }
    else
    setVisibility("hidden");
  }

  return <div className="new-expense">{getForm()}</div>;
};

export default NewExpense;
