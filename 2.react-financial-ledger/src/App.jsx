import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #f0f0f0;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
