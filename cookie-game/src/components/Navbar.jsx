import { Link, NavLink } from "react-router-dom";

function Navbar({ cantidadFavoritos }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-3">
        <Link className="brand" to="/"><span aria-hidden="true">🍪</span> Cookie <span>Game</span></Link>
        <nav className="d-flex flex-wrap gap-3 gap-lg-4" aria-label="Navegación principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/juegos">Juegos</NavLink>
          <NavLink to="/favoritos">Favoritos ({cantidadFavoritos})</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
