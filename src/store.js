import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers/slice/rootSlice"; 
import rootSaga from "./reducers/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
  devTools: true,
  preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export default store;
