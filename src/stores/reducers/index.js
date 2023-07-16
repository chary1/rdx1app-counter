import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import todoListReducer from "./todolist.reducer";

const reducer = combineReducers({
  count: counterReducer,
  todos: todoListReducer,
});

export default reducer;
