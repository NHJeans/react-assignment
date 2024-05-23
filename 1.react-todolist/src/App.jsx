import "./App.css";
import Header from "./components/Header/Header";
import TodoContainer from "./components/Todo/TodoContainer/TodoContainer";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;
