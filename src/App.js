import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
