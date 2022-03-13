import { createContext, useState } from "react";
import { ModalContextProvider } from "./ModalContext";

export const BudgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {
  const [money, setMoney] = useState(0);

  const [expense, setExpense] = useState(0);

  const [total, setTotal] = useState(0);

  const [description, setDescription] = useState("");

  const [date, setDate] = useState("");

  const [datas, setDatas] = useState([]);

  const [results, setResults] = useState([]);

  const url = "http://localhost:5000/transaction";

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
        setDescription,
        datas,
        setDatas,
        date,
        setDate,
        results,
        setResults,
        url,
      }}
    >
      <ModalContextProvider>{children}</ModalContextProvider>
    </BudgetContext.Provider>
  );
};
