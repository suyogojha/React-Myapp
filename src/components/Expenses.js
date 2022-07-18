import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].time}
        amount={props.item[0].amount}
      />

      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].time}
        amount={props.item[1].amount}
      />

      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].time}
        amount={props.item[2].amount}
      />
    </div>
  );
}
export default Expenses;
