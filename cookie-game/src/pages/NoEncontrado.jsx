import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="container section-space">
      <p className="eyebrow">404</p>
      <h1>No encontramos esta página</h1>
      <p>El enlace no existe o el juego no está disponible.</p>
      <Link className="btn btn-accent" to="/juegos">Volver a juegos</Link>
    </section>
  );
}

export default NoEncontrado;
