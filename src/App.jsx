import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        {/* Cualquier ruta que no exista */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
