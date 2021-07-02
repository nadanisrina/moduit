import { combineReducers } from "redux";
//data
import DataReducer from "./data/reducers";

const rootReducer = combineReducers({
  //data
  DataReducer,
});

export default rootReducer;
