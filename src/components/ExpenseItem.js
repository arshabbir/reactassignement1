import "../index.css";
import "./Expenses.css";
import "./ExpenseDate.css"

function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
     

      <div className="expense-date">
        <div className="expense-date__month">Month : {props.date.toLocaleString("en-us", { month: "long" })}</div>
        <div className="expense-date__day">Day : {props.date.toLocaleString("en-us", { day: "2-digit" })}</div>
        <div className="expense-date__year">Year : {props.date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">${props.itemprice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
