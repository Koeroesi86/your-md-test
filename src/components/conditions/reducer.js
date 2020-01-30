import { RECEIVE_CONDITIONS } from "./actions";

export const initialState = {
  loaded: false,
  listing: [],
};

export default (state = initialState, action) => {
  if (action.type === RECEIVE_CONDITIONS) {
    return {
      ...state,
      loaded: true,
      listing: action.payload.conditions
    }
  }

  return state;
}
