import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const airlineReducer = (state = [], action) => {
  if (action.type === "ADD_AIRLINE") {
    return [...state, action.payload];
  }

  return state;
};

const storeInstance = createStore(combineReducers({ airlineReducer }));

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
