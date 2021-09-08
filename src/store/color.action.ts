export const SET_COLOR = "SET_COLOR";
export const UPDATE_COLOR_REQUEST = "UPDATE_COLOR_REQUEST";

export const setColor = (color: string) => ({
  type: SET_COLOR,
  payload: color
});

export const updateColorRequest = (color: string) => ({
  type: UPDATE_COLOR_REQUEST,
  payload: color
});
