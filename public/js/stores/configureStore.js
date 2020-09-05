import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

let defaultState = {
  originAmount: "0.00",
};

function amountReducer(state = defaultState, action) {
  if (action.type === "CHANGE_ORIGIN_AMOUNT") {
    return { ...state, originAmount: action.data.newAmount };
  }
  return state;
}

let store = createStore(amountReducer, applyMiddleware(logger));

export default store;
