import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        itemprice={props.expenses[0].amount}
        date={props.expenses[0].date}
        title={props.expenses[0].title}
      ></ExpenseItem>
      <ExpenseItem
        itemprice={props.expenses[1].amount}
        date={props.expenses[1].date}
        title={props.expenses[1].title}
      ></ExpenseItem>

      <ExpenseItem
        itemprice={props.expenses[2].amount}
        date={props.expenses[2].date}
        title={props.expenses[2].title}
      ></ExpenseItem>

      <ExpenseItem
        itemprice={props.expenses[2].amount}
        date={props.expenses[3].date}
        title={props.expenses[3].title}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
