import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todolist from "./components/Todolist";
import ArrayTodolist from "./components/ArrayTodolist";
import ObjectTodolist from "./components/ObjectTodolist";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todolist></Todolist>
      <ArrayTodolist></ArrayTodolist>
      <ObjectTodolist></ObjectTodolist>
    </div>
  );
}

export default App;
