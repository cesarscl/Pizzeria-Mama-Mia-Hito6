# Pizzería Mamma Mia!

Hito 5 - React Router I | Desafío Latam - Fullstack JS

## Accesos al proyecto

- Demo en vivo Hito 4 (Vercel): **[pizzeria-mama-mia-hito4.vercel.app](https://pizzeria-mama-mia-hito4.vercel.app/)**
- Backend / API (Render): **[pizzeria-backend-laiv.onrender.com](https://pizzeria-backend-laiv.onrender.com/api/pizzas)**
  - `GET /api/pizzas` → [listado de pizzas](https://pizzeria-backend-laiv.onrender.com/api/pizzas)
  - `GET /api/pizzas/p001` → [detalle de una pizza](https://pizzeria-backend-laiv.onrender.com/api/pizzas/p001)
- Repositorio: **[cesarscl/Pizzeria-Mama-Mia-Hito4](https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito4)**

> El backend está en el plan gratuito de Render podria estar inactivo al mometo de la evaluacion

## Descripción

Landing page de una pizzería desarrollada con **React + Vite**. Muestra un menú de pizzas, un navbar con estado simulado de sesión y un footer institucional.

En el **Hito 2** se agregan los formularios de **registro** y **login**, manejados con el hook `useState` y el evento `onSubmit`, que validan los datos ingresados y muestran un mensaje de éxito o de error. La navegación entre vistas se controla con un estado en `App.jsx`.

En el **Hito 3** el menú pasa a renderizarse dinámicamente con `.map()` desde el archivo `pizzas.js`, y se agrega un **carrito de compras** simulado que permite aumentar y disminuir cantidades y calcula el total de la compra.

En el **Hito 4** las pizzas se obtienen desde una **API** (backend del material de apoyo) usando `useEffect` y `fetch`. `Home` carga el listado completo y el nuevo componente `Pizza` muestra el detalle de una pizza (por ahora fija: `p001`), al que se llega con el botón **Ver Más** de cualquier tarjeta.

En el **Hito 5** la navegación pasa a hacerse con **React Router**: cada vista tiene su propia URL, los componentes de página se trasladan a la carpeta `pages`, y se agregan las páginas **Profile** y **NotFound** (404).

| Ruta | Página |
|---|---|
| `/` | Home |
| `/register` | Register |
| `/login` | Login |
| `/cart` | Cart |
| `/pizza/p001` | Pizza |
| `/profile` | Profile |
| `/404` y cualquier ruta inexistente | NotFound |

> El botón **🛒 Total** del Navbar lleva a `/cart`. El monto de ese botón sigue siendo un valor fijo; el total real se muestra dentro del carrito.

## Componentes

```
src/
├── main.jsx            → envuelve <App /> con <BrowserRouter>
├── App.jsx             → Navbar + <Routes> + Footer
├── components/
│   ├── Navbar.jsx      → menú con <Link>, variables `total` y `token`
│   ├── Header.jsx      → título y descripción de la pizzería
│   ├── CardPizza.jsx   → tarjeta de pizza (vía props)
│   ├── Message.jsx     → alerta de éxito/error
│   └── Footer.jsx      → derechos reservados
├── pages/
│   ├── Home.jsx        → listado de pizzas desde la API (Header + CardPizza x6)
│   ├── Pizza.jsx       → detalle de una pizza desde la API
│   ├── Register.jsx    → formulario de registro (usa Message)
│   ├── Login.jsx       → formulario de login (usa Message)
│   ├── Cart.jsx        → carrito de compras: cantidades y total
│   ├── Profile.jsx     → email del usuario y botón cerrar sesión
│   └── NotFound.jsx    → página 404 con enlace al inicio
├── utils/helpers.js
└── pizzas.js
```

- **main.jsx**: envuelve la aplicación con `BrowserRouter` de `react-router-dom`.
- **App.jsx**: define las rutas con `Routes` y `Route`. La ruta `*` muestra `NotFound` para cualquier URL que no exista.
- **pizzas.js**: datos locales. Exporta `pizzas` (desde el Hito 4 solo se usa para las imágenes de respaldo) y `pizzaCart` (simulación del carrito).
- **Navbar.jsx**: enlaces con `Link` a Home, Profile, Login y Register, más el botón **🛒 Total** que lleva a `/cart`. Con `token` en `false` muestra Login/Register; con `true`, Logout. El enlace a Profile está siempre visible mientras la autenticación sea estática. El total se formatea con separador de miles usando `toLocaleString`.
- **Profile.jsx**: muestra un email fijo (`usuario@pizzeria.cl`) y un botón Cerrar sesión, ambos estáticos por ahora.
- **NotFound.jsx**: página 404 temática con un `Link` que vuelve a `/`.
- **Home.jsx**: con `useEffect` y `fetch` consume `GET /api/pizzas`, guarda el resultado en el estado `pizzas` y renderiza un `CardPizza` por cada una. Muestra un mensaje mientras carga y otro si el backend no responde.
- **Pizza.jsx**: con `useEffect` y `fetch` consume `GET /api/pizzas/p001` y muestra nombre, precio, ingredientes, imagen y descripción. El botón Añadir aún no tiene funcionalidad.
- **CardPizza.jsx**: recibe `id`, `name`, `price`, `ingredients` e `img` por props, y renderiza un `<li>` por cada ingrediente. El botón Ver Más es un `Link` a `/pizza/p001`.
- **Cart.jsx**: guarda `pizzaCart` en el estado `cart` y muestra imagen, nombre, precio y cantidad de cada pizza. Los botones `+` y `-` cambian la cantidad y, al llegar a 0, la pizza se elimina del carrito. El total se calcula con `reduce`. El botón Pagar aún no tiene funcionalidad.
- **Register.jsx**: estados `email`, `password` y `confirmPassword`; valida campos obligatorios, largo mínimo de 6 caracteres y que ambas contraseñas coincidan.
- **Login.jsx**: estados `email` y `password`; valida campos obligatorios y largo mínimo de 6 caracteres.
- **Message.jsx**: alerta de Bootstrap (verde o roja) que solo se muestra cuando hay un mensaje.
- **utils/helpers.js**: `formatPrice` (reutilizada en `Navbar`, `CardPizza`, `Cart` y `Pizza`), `API_URL` (URL del backend) y `handleImgError` (imagen de respaldo).

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/) (`react-router-dom`)
- [Bootstrap 5](https://getbootstrap.com/)

## Cómo correr el proyecto en local

Por defecto el frontend consulta el backend publicado en Render, así que basta con los pasos del frontend (más abajo).

Para usar en cambio el backend local del material de apoyo ("Material de apoyo - Backend Pizzas"), levántalo en otra terminal:

```bash
cd simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
npm start   # queda en http://localhost:5000
```

> En macOS, si aparece `EADDRINUSE` en el puerto 5000, desactiva **Receptor AirPlay** en Ajustes del Sistema → General → AirDrop y Handoff.

y crea en el frontend un archivo `.env.local` con:

```bash
VITE_API_URL=http://localhost:5000
```

Luego, en el frontend:

```bash
git clone https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito4.git
cd Pizzeria-Mama-Mia-Hito4
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.


## Requerimientos del Hito 1

- [x] `App.jsx` muestra `Navbar`, `Home` y `Footer`
- [x] `Header.jsx` con título y descripción, llamado desde `Home.jsx`
- [x] `Navbar.jsx` con menú Home, Profile, Logout, Login, Register y Total
- [x] Botones Home y Total visibles independientemente del `token`
- [x] `CardPizza.jsx` recibe nombre, precio, ingredientes e imagen por props
- [x] `Footer.jsx` con el texto de derechos reservados

## Requerimientos del Hito 2

- [x] `Register.jsx` con campos Email, Contraseña y Confirmar contraseña
  - Todos los campos obligatorios
  - Contraseña de al menos 6 caracteres
  - Contraseña y confirmación deben coincidir
  - Muestra mensaje de éxito o de error al enviar
- [x] `Login.jsx` con campos Email y Contraseña
  - Todos los campos obligatorios
  - Contraseña de al menos 6 caracteres
  - Muestra mensaje de éxito o de error al enviar
- [x] Los botones Home, Login y Register del `Navbar` cambian la vista mostrada en `App.jsx` (estado `view`; desde el Hito 5 se reemplazó por React Router)

## Requerimientos del Hito 3

- [x] `Home.jsx` recorre el array `pizzas` y renderiza un `CardPizza` por cada pizza (6 tarjetas)
- [x] `CardPizza.jsx` muestra la información de cada pizza utilizando props
- [x] `CardPizza.jsx` itera por los ingredientes y renderiza un `<li>` por cada uno
- [x] `Cart.jsx` recorre `pizzaCart` y muestra imagen, nombre, precio y cantidad de cada pizza
- [x] Botones para aumentar y disminuir la cantidad; con cantidad 0 la pizza se elimina del carrito
- [x] Cálculo del total de la compra y botón Pagar (sin funcionalidad por ahora)

## Requerimientos del Hito 4

- [x] `Home.jsx` consume la API de pizzas y renderiza las tarjetas
- [x] `Home.jsx` utiliza el hook `useEffect` para consumir la API
- [x] `Pizza.jsx` consume la API (`/api/pizzas/p001`) y renderiza la información de la pizza
- [x] `Pizza.jsx` utiliza el hook `useEffect` para consumir la API
- [x] `Pizza.jsx` muestra nombre, precio, ingredientes, imagen y descripción

## Requerimientos del Hito 5

- [x] Instalación de `react-router-dom` y configuración con `BrowserRouter` en `main.jsx`
- [x] `Home`, `Register`, `Login`, `Cart` y `Pizza` trasladados a la carpeta `pages`
- [x] Rutas `/`, `/register`, `/login`, `/cart`, `/pizza/p001`, `/profile` y `/404`
- [x] `NotFound` se muestra en cualquier ruta inexistente y tiene un enlace a `/`
- [x] `Profile` muestra el email del usuario y un botón para cerrar sesión (estáticos)
- [x] `Navbar` con enlaces `Link` a las rutas; el botón **🛒 Total** redirige a `/cart`

### Notas de implementación

- `vercel.json` redirige todas las rutas a `index.html`, para que en Vercel funcione entrar directo o recargar en rutas como `/cart` o `/profile`.

- La URL del backend se define en `API_URL`: por defecto el backend publicado en Render ([pizzeria-backend-laiv.onrender.com](https://pizzeria-backend-laiv.onrender.com/api/pizzas)), o el valor de la variable de entorno `VITE_API_URL` si está definida.
- Las imágenes que entrega el backend (Firebase) responden error 402; si una imagen falla, `onError` la reemplaza por la imagen de respaldo de `pizzas.js` según el `id`.
- Las URLs de imágenes del material de apoyo responden error 402, por lo que en `pizzas.js` se reemplazaron por fotos de [Unsplash](https://unsplash.com/).

## Autor

Cesar — Desafío Latam, Fullstack JS, Módulo 04
