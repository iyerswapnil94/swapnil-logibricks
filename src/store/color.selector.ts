import { IApplicationState } from "./state.model";

export const getColor = (state: IApplicationState) => state.color.backgroundColor;
