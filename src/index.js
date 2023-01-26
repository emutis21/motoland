import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Navbar from "./components/NavBar/Navbar";
import Main from "./routes/Main";
import reducer from "./reducers";
import Cart from "./routes/Cart";

const store = createStore(reducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Navbar />
        <Main />
      </Provider>
    ),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/cart",
    element: (
      <Provider store={store}>
        <Cart />
      </Provider>
    ),
  },
  {
    path: "/contact",
    element: <h1>contact</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
