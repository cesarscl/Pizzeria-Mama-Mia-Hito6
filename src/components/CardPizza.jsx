import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { formatPrice, handleImgError } from "../utils/helpers"

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart()

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={img}
          className="card-img-top"
          alt={`Pizza ${name}`}
          style={{ height: "200px", objectFit: "cover" }}
          onError={handleImgError(id)}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-capitalize">Pizza {name}</h5>

          <p className="text-secondary small mb-1">Ingredientes:</p>
          <ul className="small ps-3">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>🍕 {ingredient}</li>
            ))}
          </ul>

          <p className="fs-5 fw-bold text-center my-2">
            Precio: ${formatPrice(price)}
          </p>

          <div className="d-flex justify-content-between mt-auto">
            {/* Por ahora la ruta del detalle es fija; en el siguiente hito será dinámica */}
            <Link to="/pizza/p001" className="btn btn-outline-secondary btn-sm">
              Ver Más 👀
            </Link>
            <button className="btn btn-dark btn-sm" onClick={() => addToCart({ id, name, price, img })}>
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
