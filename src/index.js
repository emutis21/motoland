import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/App.scss";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
