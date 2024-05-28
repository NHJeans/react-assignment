import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import AccountContextProvider from "./context/AccountContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AccountContextProvider>
        <Router />
      </AccountContextProvider>
    </BrowserRouter>
  );
}

export default App;
