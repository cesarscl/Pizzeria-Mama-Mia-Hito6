// Por ahora el email y el botón de cerrar sesión son estáticos;
// la autenticación se implementa en los siguientes hitos.
const Profile = () => {
  const email = "usuario@pizzeria.cl"

  return (
    <main className="container my-5" style={{ maxWidth: "480px" }}>
      <div className="card shadow-sm text-center">
        <div className="card-body py-4">
          <div className="display-4 mb-2">👤</div>
          <h2 className="h4 mb-3">Mi perfil</h2>
          <p className="text-secondary small mb-1">Email</p>
          <p className="fs-5 fw-semibold mb-4">{email}</p>
          <button className="btn btn-dark">🔒 Cerrar sesión</button>
        </div>
      </div>
    </main>
  )
}

export default Profile
