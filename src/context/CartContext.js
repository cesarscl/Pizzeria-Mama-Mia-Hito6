import { createContext, useContext } from "react"

// Contexto global del carrito de compras (el estado vive en CartProvider)
export const CartContext = createContext()

export const useCart = () => useContext(CartContext)
