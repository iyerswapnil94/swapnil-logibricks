import { put, takeEvery } from "redux-saga/effects";
import { IStoreAction } from "./action.model";
import { setColor, UPDATE_COLOR_REQUEST } from "./color.action";

export const updateColor = function* (action: IStoreAction) {
  yield put(setColor(action.payload));
};

export const watchUpdatedColorRequest = function* () {
  yield takeEvery(UPDATE_COLOR_REQUEST, updateColor);
};
