import { useState } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import fakeData from "./data/fakeData.json";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [expenses, setExpenses] = useState(fakeData);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router expenses={expenses} setExpenses={setExpenses} />
    </BrowserRouter>
  );
}

export default App;
