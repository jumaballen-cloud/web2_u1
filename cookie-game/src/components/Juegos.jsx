import JuegoCard from "./JuegoCard.jsx";

function Juegos({ juegos, favoritos, onCambiarFavorito, titulo = "Juegos para repetir" }) {
  return (
    <section className="section-space" id="juegos" aria-labelledby="titulo-juegos">
      <div className="container">
        <h2 id="titulo-juegos">{titulo}</h2>
        <div className="row g-4 mt-2">
          {juegos.map((juego) => (
            <div className="col-md-6" key={juego.id}>
              <JuegoCard
                id={juego.id}
                nombre={juego.nombre}
                genero={juego.genero}
                descripcion={juego.descripcion}
                imagen={juego.imagen}
                textoAlternativo={juego.textoAlternativo}
                esFavorito={favoritos.includes(juego.id)}
                onCambiarFavorito={onCambiarFavorito}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Juegos;
