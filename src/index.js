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
import Error from "./routes/Error";

const store = createStore(reducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error />
  },
  {
    path: "/contact",
    element: <h1>contact</h1>,
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
