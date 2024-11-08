import Nav from "./Nav/Nav";
import MainBoard from "./MainBoard/MainBoard.jsx";
import { useEffect, useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  const [sortFilter, setSortFilter] = useState({
    incomeSort: false,
    incomeFilter: false,
    expenseSort: false,
    expenseFilter: false,
  });
  const [activeEdit, setActiveEdit] = useState(false);
  const [editIncome, setEditIncome] = useState(null);
  const [editExpense, setEditExpense] = useState(null);
  const [incomeState, setIncomeState] = useState(0);
  const [expenseState, setExpenseState] = useState(0);
  useEffect(() => {
    const totalIncome = income.reduce(
      (sum, item) => sum + parseInt(item.amount),
      0
    );
    const totalExpense = expense.reduce(
      (sum, item) => sum + parseInt(item.amount),
      0
    );
    setIncomeState(totalIncome);
    setExpenseState(totalExpense);
  }, [income, expense]);

  const [activeTab, setActiveTab] = useState(0);

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
        expense={expense}
        setExpense={setExpense}
        income={income}
        setIncome={setIncome}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        incomeState={incomeState}
        expenseState={expenseState}
        activeEdit={activeEdit}
        setActiveEdit={setActiveEdit}
        editIncome={editIncome}
        setEditIncome={setEditIncome}
        editExpense={editExpense}
        setEditExpense={setEditExpense}
      />
    </div>
  );
}

export default App;
