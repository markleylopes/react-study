/* redux, react-redux, sagas */
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
/* redux, react-redux, sagas */
//reducers
import { rootReducer } from "./reducers/index";
//sagas
import rootSagas from './sagas/index'

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas, store.dispatch); // run middleware
  return store;
}
