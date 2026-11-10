import { Link } from "react-router-dom"
import { formatPrice } from "../utils/helpers"

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
        <Link to="/" className="navbar-brand mb-0 fw-bold">Pizzería Mamma Mia!</Link>

        <div className="d-flex flex-wrap align-items-center gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
          {/* Profile queda visible mientras la autenticación sea estática */}
          <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>

          {token ? (
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
            </>
          )}

          <Link to="/cart" className="btn btn-warning btn-sm fw-semibold">
            🛒 Total: ${formatPrice(total)}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
