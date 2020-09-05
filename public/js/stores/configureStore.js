import { createStore } from "redux";

let defaultState = {
  originAmount: "0.00",
};

function amountReducer(state = defaultState, action) {
  if (action.type === "CHANGE_ORIGIN_AMOUNT") {
    console.log({ state });
    return { ...state, originAmount: action.data.newAmount };
  }
  return state;
}

let store = createStore(amountReducer);

export default store;
