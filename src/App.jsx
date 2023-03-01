import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Main from "./routes/Main";
import Contact from "./routes/Contact";
import About from "./routes/About";
import More from "./routes/More";
import Error from "./routes/Error";
import AllMotos from "./routes/AllMotos";
import Moto from "./components/Moto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/motos/*"
          element={<AllMotos />}
        />
        <Route
          path="/motos/:name"
          element={<Moto />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/more"
          element={<More />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
