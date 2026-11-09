import { Link, useParams } from "react-router-dom";
import BotonFavorito from "../components/BotonFavorito.jsx";
import NoEncontrado from "./NoEncontrado.jsx";

function DetalleJuego({ juegos, favoritos, onCambiarFavorito }) {
  const { id } = useParams();
  const juego = juegos.find((juego) => juego.id === id);

  if (!juego) return <NoEncontrado />;

  return (
    <section className="container section-space" aria-labelledby="titulo-detalle">
      <Link className="back-link" to="/juegos">← Volver a juegos</Link>
      <div className="row align-items-center g-4 mt-2">
        <div className="col-lg-7">
          <img className="detail-image" src={juego.imagen} alt={juego.textoAlternativo} />
        </div>
        <div className="col-lg-5">
          <p className="game-genre">{juego.genero}</p>
          <h1 id="titulo-detalle">{juego.nombre}</h1>
          <p>{juego.descripcion}</p>
          <BotonFavorito nombre={juego.nombre} esFavorito={favoritos.includes(juego.id)} onClick={() => onCambiarFavorito(juego.id)} />
        </div>
      </div>
    </section>
  );
}

export default DetalleJuego;
