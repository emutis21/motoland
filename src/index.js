import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./routes/Main";
import reducer from "./reducers";
import Cart from "./routes/Cart";
import Error from "./routes/Error";
import About from "./routes/About";
import More from "./routes/More";
import Contact from "./routes/Contact";

const store = createStore(reducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/more",
    element: <More />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
