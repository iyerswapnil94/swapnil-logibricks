import { combineReducers } from "redux";
import { colorReducer } from "store/color.reducer";

const allReducers = {
  color: colorReducer
};

export const rootReducer = combineReducers(allReducers);
