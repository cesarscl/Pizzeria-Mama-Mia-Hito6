# Pizzería Mamma Mia!

Hito 6 - Context API | Desafío Latam - Fullstack JS

## Accesos

- **Demo (Vercel):** [pizzeria-mama-mia-hito6.vercel.app](https://pizzeria-mama-mia-hito6.vercel.app/)
- **Backend / API (Render):** [pizzeria-backend-laiv.onrender.com/api/pizzas](https://pizzeria-backend-laiv.onrender.com/api/pizzas)
- **Repositorio:** [cesarscl/Pizzeria-Mama-Mia-Hito6](https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito6)

> El backend está en el plan gratuito de Render y podría estar inactivo al momento de la evaluación: la primera carga puede tardar cerca de un minuto.

## Hito 6: carrito con Context API

El carrito es un estado global (`CartContext`) que parte vacío:

- [x] `CartProvider` maneja el carrito: `addToCart`, `increase`, `decrease`, `removeFromCart` y `total`.
- [x] El **Navbar** muestra el total del carrito desde el contexto.
- [x] El botón **Añadir** de cada tarjeta en Home agrega la pizza al carrito.
- [x] La página **Cart** muestra las pizzas agregadas; `+` suma, `-` resta (en 0 se elimina) y 🗑 la quita.
- [x] El total es el mismo en Cart y en el Navbar.

## Hitos anteriores

| Hito | Contenido |
|---|---|
| 1 | Componentes y props: Navbar, Header, CardPizza y Footer |
| 2 | Formularios de Register y Login con validaciones (`useState`) |
| 3 | Menú con `.map()` y carrito con `+` / `-` y total |
| 4 | Pizzas desde la API con `useEffect` y `fetch` (Home y detalle `p001`) |
| 5 | Rutas con React Router, carpeta `pages`, Profile y NotFound |

## Rutas

| Ruta | Página |
|---|---|
| `/` | Home |
| `/register` | Register |
| `/login` | Login |
| `/cart` | Cart |
| `/pizza/p001` | Pizza |
| `/profile` | Profile |
| `/404` y rutas inexistentes | NotFound |

## Estructura

```
src/
├── main.jsx        → CartProvider > BrowserRouter > App
├── App.jsx         → Navbar + Routes + Footer
├── components/     → Navbar, Header, CardPizza, Message, Footer
├── context/        → CartContext.js (contexto + useCart), CartProvider.jsx
├── pages/          → Home, Pizza, Register, Login, Cart, Profile, NotFound
├── utils/helpers.js
└── pizzas.js
```

## Cómo correrlo en local

```bash
git clone https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito6.git
cd Pizzeria-Mama-Mia-Hito6
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173). Por defecto usa el backend de Render; para usar el backend local del material de apoyo (`npm start`, puerto 5000), crea un archivo `.env.local` con `VITE_API_URL=http://localhost:5000`.

## Notas

- Las imágenes del material de apoyo (Firebase) responden error 402; se reemplazan por fotos de [Unsplash](https://unsplash.com/).
- `vercel.json` permite entrar directo o recargar en cualquier ruta en Vercel.

## Tecnologías

React 19 · Vite · React Router 7 · Bootstrap 5

## Autor

Cesar Ormeño — Desafío Latam, Fullstack JS, Módulo 04
