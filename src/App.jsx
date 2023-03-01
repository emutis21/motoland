import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/NavBar/Navbar";
import Main from "./routes/Main";

const Contact = lazy(() => import("./routes/Contact"));
const About = lazy(() => import("./routes/About"));
const More = lazy(() => import("./routes/More"));
const Error = lazy(() => import("./routes/Error"));
const AllMotos = lazy(() => import("./routes/AllMotos"));
const Moto = lazy(() => import("./components/Moto"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="motos"
            element={<AllMotos />}
          />
          <Route
            path="motos/:id"
            element={<Moto />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="more"
            element={<More />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
