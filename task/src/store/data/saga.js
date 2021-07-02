import { takeEvery, fork, put, all, call } from "redux-saga/effects";
// TODO craete Saga for SitveVisit all data function POST and GET
import { ALL_DATA_LOAD } from "./actionTypes";
import { allDataSuccess, allDataError } from "./action";
import request from "../../helper/untils/request";

let baseurl = "https://screening.moduit.id";
function* loadAllData(param) {
  let question = param.params;
  const requestURL = `${baseurl}/frontend/web/question/${question}`;
  const headers = { "Access-Control-Allow-Origin": "*" };
  const option = {
    method: "GET",
    headers,
  };
  try {
    const response = yield call(request, requestURL, option);
    yield put(allDataSuccess(response.data));
  } catch (err) {
    yield put(allDataError(err));
  }
}

export function* watchLoadAllData() {
  yield takeEvery(ALL_DATA_LOAD, loadAllData);
}

function* SagasData() {
  yield all([fork(watchLoadAllData)]);
}

export default SagasData;
