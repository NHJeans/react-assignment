import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";

const Router = ({ expenses, setExpenses }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage expenses={expenses} setExpenses={setExpenses} />}
      />
      <Route
        path="/detail/:id"
        element={<DetailPage expenses={expenses} setExpenses={setExpenses} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
