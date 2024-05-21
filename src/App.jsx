import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Navbar from './components/NavBar/Navbar'
import Main from './routes/Main'
import ViewCart from './routes/ViewCart'
import useApiCall from './hooks/useApiCall'
import { Footer } from './components/Footer'
import Login from './auth/Login'
import Register from './auth/Register'


const Contact = lazy(() => import('./routes/Contact'))
const About = lazy(() => import('./routes/About'))
const Error = lazy(() => import('./routes/Error'))
const AllMotos = lazy(() => import('./routes/AllMotos'))
const Moto = lazy(() => import('./routes/Moto'))

function App() {
  useApiCall()

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/motos' element={<AllMotos />} />
          <Route path='/motos/:id' element={<Moto />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<ViewCart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
