import { useEffect, useState } from "react"
import Header from "./Header"
import CardPizza from "./CardPizza"
import { API_URL } from "../utils/helpers"

const Home = ({ onViewPizza }) => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Consume la API de pizzas al montar el componente
  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch(`${API_URL}/api/pizzas`)
        if (!res.ok) throw new Error(`Error ${res.status}`)
        const data = await res.json()
        setPizzas(data)
      } catch {
        setError("No se pudieron cargar las pizzas. Revisa que el backend esté levantado.")
      } finally {
        setLoading(false)
      }
    }
    getPizzas()
  }, [])

  return (
    <main>
      <Header />

      <div className="container my-4">
        {loading && <p className="text-center text-secondary">Cargando pizzas...</p>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              onViewMore={onViewPizza}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
