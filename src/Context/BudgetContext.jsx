import { createContext, useState } from "react";
import { ModalContextProvider } from "./ModalContext";

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {
  const [money, setMoney] = useState(0);

  const [expense, setExpense] = useState(0);

  const [total, setTotal] = useState(0);

  const [description, setDescription] = useState("");

  return (
    <BudgetContext.Provider
      value={{
        money,
        setMoney,
        expense,
        setExpense,
        total,
        setTotal,
        description,
        setDescription
      }}
    >
      <ModalContextProvider>{children}</ModalContextProvider>
    </BudgetContext.Provider>
  );
};
