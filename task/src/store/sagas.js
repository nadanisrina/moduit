import { all } from "redux-saga/effects";

//public
import SagasData from "./data/saga";
export default function* rootSaga() {
  yield all([
    //public
    SagasData(),
  ]);
}
