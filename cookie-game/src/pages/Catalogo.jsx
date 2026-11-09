import Juegos from "../components/Juegos.jsx";

function Catalogo({ juegos, favoritos, onCambiarFavorito }) {
  return (
    <>
      <div className="container pt-5">
        <p className="eyebrow">ENCUENTRA TU PRÓXIMA PARTIDA</p>
        <h1>Catálogo de juegos</h1>
        <p>Explora los juegos y guarda los que más te gusten.</p>
      </div>
      <Juegos juegos={juegos} favoritos={favoritos} onCambiarFavorito={onCambiarFavorito} titulo="Todos los juegos" />
    </>
  );
}

export default Catalogo;
