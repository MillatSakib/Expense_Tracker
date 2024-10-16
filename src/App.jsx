import Nav from "./Nav/Nav";
import MainBoard from "./MainBoard/MainBoard.jsx";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({ income: 0, expense: 0, total: 0 });
  const [expense, setExpense] = useState({});
  const [income, setIncome] = useState({});
  const [sortFilter, setSortFilter] = useState({
    incomeSort: false,
    incomeFilter: false,
    expenseSort: false,
    expenseFilter: false,
  });
  return (
    <div
      onClick={(e) => {
        setSortFilter({
          incomeSort: false,
          incomeFilter: false,
          expenseSort: false,
          expenseFilter: false,
        });
      }}
    >
      <Nav />
      <MainBoard
        info={info}
        setInfo={setInfo}
        expense={expense}
        setExpense={setExpense}
        income={income}
        setIncome={setIncome}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
      />
    </div>
  );
}

export default App;
