import { useEffect, useState } from "react";
import AccountForm from "../../components/Account/AccountForm";
import AccountList from "../../components/Account/AccountList";
import AccountSelector from "../../components/Account/AccountSelector";
import Layout from "../../components/Layout";

const HomePage = ({ expenses, setExpenses }) => {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const savedMonth = localStorage.getItem("month");
    return savedMonth ? parseInt(savedMonth, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("month", selectedMonth);
  }, [selectedMonth]);

  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth);
  };

  const filteredExpenses = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1], 10) === selectedMonth
  );

  return (
    <Layout>
      <AccountForm setExpenses={setExpenses} />
      <AccountSelector
        selectedMonth={selectedMonth}
        setSelectedMonth={handleMonthChange}
      />
      <AccountList
        selectedMonth={selectedMonth}
        filteredExpenses={filteredExpenses}
      />
    </Layout>
  );
};

export default HomePage;
