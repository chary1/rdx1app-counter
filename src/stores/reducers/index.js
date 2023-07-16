import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";

const reducer = combineReducers({ count: counterReducer });

export default reducer;
