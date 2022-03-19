import axios from "axios";
import { createContext, useState } from "react";
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
        createBudget,
      }}
    >
      <ModalContextProvider>{children}</ModalContextProvider>
    </BudgetContext.Provider>
  );
};
