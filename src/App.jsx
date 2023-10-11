import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Navbar from './components/NavBar/Navbar'
import Main from './routes/Main'
import ViewCart from './routes/ViewCart'

const Contact = lazy(() => import('./routes/Contact'))
const About = lazy(() => import('./routes/About'))
const Error = lazy(() => import('./routes/Error'))
const AllMotos = lazy(() => import('./routes/AllMotos'))
const Moto = lazy(() => import('./routes/Moto'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Navbar />
        <Routes>
          <Route path="/motoland/" element={<Main />} />
          <Route path="/motoland/motos" element={<AllMotos />} />
          <Route path="/motoland/motos/:id" element={<Moto />} />
          <Route path="/motoland/about" element={<About />} />
          <Route path="/motoland/cart" element={<ViewCart />} />
          <Route path="/motoland/contact" element={<Contact />} />
          <Route path="/motoland/*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
