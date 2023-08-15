import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import todoListReducer from "./todolist.reducer";
import todolistArrayReducter from "./todolist.array.reducter";
import todoListObjectReducer from "./todolist.object.reducer";

const reducer = combineReducers({
  counter: counterReducer,
  todos: todoListReducer,
  todosArray: todolistArrayReducter,
  todosObj: todoListObjectReducer,
});

export default reducer;
