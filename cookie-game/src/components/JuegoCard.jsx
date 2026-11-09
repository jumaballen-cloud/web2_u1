import { Link } from "react-router-dom";
import BotonFavorito from "./BotonFavorito.jsx";

function JuegoCard({ id, nombre, genero, descripcion, imagen, textoAlternativo, esFavorito, onCambiarFavorito }) {
  return (
    <article className="card game-card h-100">
      <img className="card-img-top" src={imagen} alt={textoAlternativo} width="800" height="600" loading="lazy" />
      <div className="card-body p-4 d-flex flex-column">
        <p className="game-genre">{genero}</p>
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
        <div className="d-flex flex-wrap gap-2 mt-auto pt-4">
          <Link className="btn btn-accent" to={`/juegos/${id}`}>Ver detalle</Link>
          <BotonFavorito nombre={nombre} esFavorito={esFavorito} onClick={() => onCambiarFavorito(id)} />
        </div>
      </div>
    </article>
  );
}

export default JuegoCard;
