import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../UI/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [inputYear, setInputYear] = useState("Select");
  const [filter, setFilter] = useState("Select");

  const getFilterHandler = (event) => {
    setInputYear(event.target.value);
    setFilter(event.target.value);
  };

  const filterExpenses = () => {
    if (filter !== "Select") {
      const results = props.expenses.filter(item => item.date.getFullYear().toString() === filter);
      return results;
    } else {
      return props.expenses;
    }
  };
  filterExpenses();

  return (
    
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={inputYear}
          filterHandler={getFilterHandler}
        />
        <ExpensesChart expenses={filterExpenses()}/>
        <ExpensesList items={filterExpenses()}/>
      </Card>
    </div>
  );
}

export default Expenses;
