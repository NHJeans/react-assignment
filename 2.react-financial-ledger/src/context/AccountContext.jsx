import { createContext, useState, useEffect } from "react";
import fakeData from "../data/fakeData.json";

export const AccountContext = createContext();

const AccountContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(fakeData);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const savedMonth = localStorage.getItem("month");
    return savedMonth ? parseInt(savedMonth, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("month", selectedMonth);
  }, [selectedMonth]);

  return (
    <AccountContext.Provider
      value={{
        expenses,
        setExpenses,
        selectedMonth,
        setSelectedMonth,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
