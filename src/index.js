import "./styles/App.scss";

import ReactDOM from "react-dom/client";
import App from "./App";
import reducer from "./reducers";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <App />
  </Provider>
);
