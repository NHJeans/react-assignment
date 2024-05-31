import styled from "styled-components";
import { useState } from "react";
import MonthNavigation from "../components/MonthNavigation";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";

const Home = ({ expenses, setExpenses }) => {
  const [month, setMonth] = useState(1);

  console.log(expenses);
  const filteredExpenses = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1], 10) === month
  );
  console.log(filteredExpenses);
  return (
    <Container>
      <ExpenseForm
        month={month}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <MonthNavigation month={month} setMonth={setMonth} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;
