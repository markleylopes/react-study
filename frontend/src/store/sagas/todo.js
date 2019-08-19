import { call, put, all, takeEvery, takeLatest } from "redux-saga/effects";
import { Api } from "../../api/todo";

function* search(action) {
  const result = yield call(Api.searchTodo, action.payload);
  yield put({ type: "TODO_SEARCH_OK", payload: result });
}

function* updateDescription(action) {
  yield put({ type: "UPDATED_DESCRIPTION", payload: action.payload });
}

function* add(action) {
  yield call(Api.addTodo, action.payload);
  yield put({ type: "TODO_SEARCH", payload: "" });
  yield put({ type: "TODO_CLEANED" });
}

function* del(action) {
  yield call(Api.deleteTodo, action.payload.id);
  yield put({ type: "TODO_SEARCH", payload: action.payload.description });
}

function* clear() {
  yield put({ type: "TODO_CLEANED" });
  yield put({ type: "TODO_SEARCH" });
}

function* rootSagas(a) {
  yield all([
    takeLatest("TODO_SEARCH", search),
    takeLatest("TODO_CREATE", add),
    takeLatest("UPDATE_DESCRIPTION", updateDescription),
    takeLatest("TODO_DELETE", del),
    takeEvery("TODO_CLEAR", clear)
  ]);
}
export default rootSagas;
