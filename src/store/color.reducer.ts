import { standardColors } from "src/config/colorConfig";
import { IStoreAction } from "./action.model";
import { SET_COLOR } from "./color.action";

export interface IColorReducerState {
  backgroundColor: string;
}

const initialState: IColorReducerState = {
  backgroundColor: standardColors.lightBackgroundGrey
};

export const colorReducer = (
  state: IColorReducerState = initialState,
  action: IStoreAction
): IColorReducerState => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};
