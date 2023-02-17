import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Main from "./routes/Main";
import Error from "./routes/Error";
import Contact from "./routes/Contact";
import About from "./routes/About";
import NewMoto from "./routes/NewMoto";
import More from "./routes/More";
import Cart from "./routes/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          errorElement={<Error />}>
          <Route
            index
            element={<Main />}
          />
          <Route
            path="Cart"
            element={<Cart />}
          />
        </Route>
        <Route
          path="/about"
          element={<About />}
          errorElement={<Error />}
        />
        <Route
          path="/contact"
          element={<Contact />}
          errorElement={<Error />}
        />
        <Route
          path="/more"
          element={<More />}
          errorElement={<Error />}
        />
        <Route
          path="/new-moto"
          element={<NewMoto />}
          errorElement={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
