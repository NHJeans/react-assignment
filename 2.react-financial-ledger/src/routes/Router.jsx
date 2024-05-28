import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";

const Router = ({
  expenses,
  handleAddExpense,
  handleDeleteExpense,
  handleUpdateExpense,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            expenses={expenses}
            handleAddExpense={handleAddExpense}
            handleDeleteExpense={handleDeleteExpense}
            handleUpdateExpense={handleUpdateExpense}
          />
        }
      />
      <Route
        path="/detail/:id"
        element={
          <DetailPage
            expenses={expenses}
            handleDeleteExpense={handleDeleteExpense}
            handleUpdateExpense={handleUpdateExpense}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
