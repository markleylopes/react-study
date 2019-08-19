import { all } from "redux-saga/effects";
import todoSagas from "./todo";

function* rootSagas() {
  yield all([todoSagas()]);
}

export default rootSagas;
