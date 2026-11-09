import { Link } from "react-router-dom";
import Juegos from "../components/Juegos.jsx";

function Favoritos({ juegos, favoritos, onCambiarFavorito }) {
  const juegosFavoritos = juegos.filter((juego) => favoritos.includes(juego.id));

  return (
    <>
      <div className="container pt-5">
        <p className="eyebrow">TUS PREFERIDOS, A MANO</p>
        <h1>Mis favoritos</h1>
        <p>Tu selección para la próxima partida.</p>
      </div>
      {juegosFavoritos.length === 0 ? (
        <div className="container py-5">
          <p>Todavía no tienes juegos favoritos. Agrega alguno desde el catálogo.</p>
          <Link className="btn btn-accent" to="/juegos">Explorar juegos</Link>
        </div>
      ) : (
        <Juegos juegos={juegosFavoritos} favoritos={favoritos} onCambiarFavorito={onCambiarFavorito} titulo="Juegos guardados" />
      )}
    </>
  );
}

export default Favoritos;
