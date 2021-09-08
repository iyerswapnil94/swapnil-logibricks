import { all } from "redux-saga/effects";
import { watchUpdatedColorRequest } from "./color.saga";

export const rootSaga = function* (): any {
  yield all([
    // All the saga for entire application to be added here
    watchUpdatedColorRequest()
  ]);
};
