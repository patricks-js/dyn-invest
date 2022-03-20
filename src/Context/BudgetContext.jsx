import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { ModalContextProvider } from "./ModalContext";

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {
  // States

  const initialRemuneration = {
    description: "",
    income: "",
    date: "",
  };

  const initialSpending = {
    description: "",
    expense: "",
    date: "",
  };

  const [remuneration, setRemuneration] = useState(initialRemuneration);

  const [spending, setSpending] = useState(initialSpending);

  // Api

  const [response, setResponse] = useState([]);

  const createBudget = async (datas) => {
    try {
      const { data } = await axios.post(url, datas);
    } catch (err) {
      console.log(err);
    }
  };

  // Values API

  const [income, setIncome] = useState(0);

  const [expense, setExpense] = useState(0);

  const [total, setTotal] = useState(0);

  const getValues = async () => {
    const { data } = await axios.get(url);
    // Income
    const resIncome = data.map((res) => res.income || 0);
    const incomes = resIncome.reduce((acc, val) => acc + val);
    setIncome(incomes);
    // Expense
    const resExpense = data.map((res) => res.expense || 0);
    const expenses = resExpense.reduce((acc, val) => acc + val);
    setExpense(expenses);
    // Total
    setTotal(incomes - expenses);
  };

  // ! Request api

  useEffect(async () => {
    const { data } = await axios.get(url);
    setResponse(data);
    getValues();
  }, [remuneration]);

  const url = "http://localhost:5000/transaction";

  return (
    <BudgetContext.Provider
      value={{
        url,
        initialSpending,
        initialRemuneration,
        remuneration,
        setRemuneration,
        spending,
        setSpending,
        response,
        setResponse,
        income,
        expense,
        total,
        createBudget,
      }}
    >
      <ModalContextProvider>{children}</ModalContextProvider>
    </BudgetContext.Provider>
  );
};
