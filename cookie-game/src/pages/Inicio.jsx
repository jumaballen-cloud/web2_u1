import Hero from "../components/Hero.jsx";
import Categorias from "../components/Categorias.jsx";
import Juegos from "../components/Juegos.jsx";
import Novedades from "../components/Novedades.jsx";

function Inicio({ juegos, favoritos, onCambiarFavorito }) {
  return (
    <>
      <Hero />
      <Categorias />
      <Juegos juegos={juegos} favoritos={favoritos} onCambiarFavorito={onCambiarFavorito} />
      <Novedades />
    </>
  );
}

export default Inicio;
