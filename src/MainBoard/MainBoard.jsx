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
}) => {
  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseInputFrom />
          <div className="lg:col-span-2">
            <CalcualtionSummary info={info}></CalcualtionSummary>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeCard
                sortFilter={sortFilter}
                setSortFilter={setSortFilter}
              />
              <ExpenseCard
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
