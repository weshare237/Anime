import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'

import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import AnimeDetails from './Pages/AnimeDetails'
import Categories from './Pages/Categories'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/anime_details' element={<AnimeDetails />} />
      </Routes>
    </Router>
  )
}

export default App
