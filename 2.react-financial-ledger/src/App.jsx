import { useState } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import fakeData from "./data/fakeData.json";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [expenses, setExpenses] = useState(fakeData);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router
        expenses={expenses}
        handleAddExpense={handleAddExpense}
        handleDeleteExpense={handleDeleteExpense}
        handleUpdateExpense={handleUpdateExpense}
      />
    </BrowserRouter>
  );
}

export default App;
