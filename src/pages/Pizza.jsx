import { useEffect, useState } from "react"
import { API_URL, formatPrice, handleImgError } from "../utils/helpers"

// Por ahora el id es fijo; en el siguiente hito será dinámico
const PIZZA_ID = "p001"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [error, setError] = useState("")

  // Consume la API para obtener una sola pizza al montar el componente
  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`${API_URL}/api/pizzas/${PIZZA_ID}`)
        if (!res.ok) throw new Error(`Error ${res.status}`)
        const data = await res.json()
        setPizza(data)
      } catch {
        setError("No se pudo cargar la pizza. Revisa que el backend esté levantado.")
      }
    }
    getPizza()
  }, [])

  if (error) {
    return (
      <main className="container my-5">
        <div className="alert alert-danger">{error}</div>
      </main>
    )
  }

  if (!pizza) {
    return <p className="container my-5 text-center text-secondary">Cargando pizza...</p>
  }

  return (
    <main className="container my-5">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-12 col-md-5">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              className="img-fluid rounded-start w-100 h-100"
              style={{ objectFit: "cover", minHeight: "280px" }}
              onError={handleImgError(pizza.id)}
            />
          </div>
          <div className="col-12 col-md-7">
            <div className="card-body d-flex flex-column h-100">
              <h2 className="card-title text-capitalize">Pizza {pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>

              <p className="text-secondary small mb-1">Ingredientes:</p>
              <ul className="small ps-3">
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>🍕 {ingredient}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <p className="fs-4 fw-bold mb-0">Precio: ${formatPrice(pizza.price)}</p>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pizza
