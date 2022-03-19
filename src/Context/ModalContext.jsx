import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [visibilityModalIncome, setVisibilityModalIncome] = useState(false);

  const [visibilityModalExpense, setVisibilityModalExpense] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        visibilityModalIncome,
        setVisibilityModalIncome,
        visibilityModalExpense,
        setVisibilityModalExpense,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
