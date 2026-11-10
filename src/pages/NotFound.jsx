import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="container my-5 text-center">
      <p className="display-1 mb-0">🍕</p>
      <h1 className="display-3 fw-bold">404</h1>
      <h2 className="h4 mb-3">¡Mamma mia! Esta pizza no está en el menú</h2>
      <p className="text-secondary mb-4">
        La página que buscas no existe o fue movida. Pero en el inicio te esperan pizzas recién horneadas.
      </p>
      <Link to="/" className="btn btn-dark">Volver al inicio</Link>
    </main>
  )
}

export default NotFound
