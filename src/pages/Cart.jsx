import { useState } from "react"
import { pizzaCart } from "../pizzas"
import { formatPrice } from "../utils/helpers"

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const increase = (id) => {
    setCart(cart.map((pizza) => (pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza)))
  }

  // Al llegar a 0 la pizza se elimina del carrito
  const decrease = (id) => {
    setCart(
      cart
        .map((pizza) => (pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza))
        .filter((pizza) => pizza.count > 0)
    )
  }

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0)

  return (
    <main className="container my-5" style={{ maxWidth: "640px" }}>
      <h5 className="mb-3">Detalles del pedido:</h5>

      {cart.length === 0 && <p className="text-secondary">Tu carrito está vacío.</p>}

      <ul className="list-unstyled">
        {cart.map((pizza) => (
          <li key={pizza.id} className="d-flex align-items-center gap-3 mb-3">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              width="60"
              height="45"
              className="rounded"
              style={{ objectFit: "cover" }}
            />
            <span className="text-capitalize flex-grow-1">{pizza.name}</span>
            <span className="fw-semibold">${formatPrice(pizza.price)}</span>
            <button className="btn btn-outline-danger btn-sm" onClick={() => decrease(pizza.id)}>-</button>
            <span className="fw-bold" style={{ minWidth: "1.5rem", textAlign: "center" }}>{pizza.count}</span>
            <button className="btn btn-outline-primary btn-sm" onClick={() => increase(pizza.id)}>+</button>
          </li>
        ))}
      </ul>

      <h3 className="mt-4">Total: ${formatPrice(total)}</h3>
      <button className="btn btn-dark mt-2">Pagar</button>
    </main>
  )
}

export default Cart
