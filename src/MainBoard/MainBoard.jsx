import React from "react";
import ExpenseInputFrom from "./ExpenseInputFrom";
import CalcualtionSummary from "./CalcualtionSummary";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";

const MainBoard = ({
  info,
  setInfo,
  expense,
  setExpense,
  income,
  setIncome,
  sortFilter,
  setSortFilter,
  activeTab,
  setActiveTab,
  incomeState,
  expenseState,
}) => {
  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseInputFrom
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            expense={expense}
            setExpense={setExpense}
            income={income}
            setIncome={setIncome}
          />
          <div className="lg:col-span-2">
            <CalcualtionSummary
              expenseState={expenseState}
              incomeState={incomeState}
            ></CalcualtionSummary>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeCard
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
                income={income}
                setIncome={setIncome}
              />
              <ExpenseCard
                expense={expense}
                setExpense={setExpense}
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainBoard;
