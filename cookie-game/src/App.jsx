import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import DetalleJuego from "./pages/DetalleJuego.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";
import { juegos } from "./data/juegos.js";

// Solo guardamos los identificadores; los datos están en juegos.js.
function leerFavoritos() {
  try {
    const guardados = JSON.parse(localStorage.getItem("cookie-game-favoritos") || "[]");
    return Array.isArray(guardados)
      ? juegos.filter((juego) => guardados.includes(juego.id)).map((juego) => juego.id)
      : [];
  } catch {
    return [];
  }
}

function App() {
  const [favoritos, setFavoritos] = useState(leerFavoritos);

  useEffect(() => {
    try {
      localStorage.setItem("cookie-game-favoritos", JSON.stringify(favoritos));
    } catch {
      // Si el navegador bloquea el almacenamiento, funciona durante la sesión.
    }
  }, [favoritos]);

  function cambiarFavorito(id) {
    setFavoritos((actuales) =>
      actuales.includes(id)
        ? actuales.filter((favoritoId) => favoritoId !== id)
        : [...actuales, id]
    );
  }

  return (
    <>
      <Navbar cantidadFavoritos={favoritos.length} />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Inicio juegos={juegos} favoritos={favoritos} onCambiarFavorito={cambiarFavorito} />} />
          <Route path="/juegos" element={<Catalogo juegos={juegos} favoritos={favoritos} onCambiarFavorito={cambiarFavorito} />} />
          <Route path="/juegos/:id" element={<DetalleJuego juegos={juegos} favoritos={favoritos} onCambiarFavorito={cambiarFavorito} />} />
          <Route path="/favoritos" element={<Favoritos juegos={juegos} favoritos={favoritos} onCambiarFavorito={cambiarFavorito} />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
