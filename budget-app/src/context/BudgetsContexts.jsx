import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext = createContext();

export function useBudgets() {
  return useContext(BudgetContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudget] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpenses({ amount, description, budgetId }) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidv4(), description, amount, budgetId }];
    });
  }
  function addBudget({ name, max }) {
    setBudget((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });
  }
  function deleteBudget({ id }) {
    setBudget((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }
  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
