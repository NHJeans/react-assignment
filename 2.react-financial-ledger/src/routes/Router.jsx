import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
