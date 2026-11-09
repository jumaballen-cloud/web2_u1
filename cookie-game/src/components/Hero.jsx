import { Link } from "react-router-dom";
import minecraft from "../assets/minecraft.jpg";

function Hero() {
  return (
    <section className="hero section-space" id="inicio" aria-labelledby="titulo-inicio">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="eyebrow">UN PEQUEÑO ANTOJO DE JUGAR</p>
            <h1 id="titulo-inicio">Cada juego tiene<br />su sabor.<br /><span>Descubre el tuyo.</span></h1>
            <p className="intro mt-4">Bienvenido a Cookie Game. Prueba nuevas aventuras, descubre tus géneros favoritos y encuentra el juego que te deje con ganas de otra partida.</p>
            <Link className="btn btn-accent mt-3" to="/juegos">Explorar juegos <span aria-hidden="true">↗</span></Link>
            <p className="hero-note mt-4"><span aria-hidden="true">🍪</span> Una galleta, una pausa y tu próxima aventura.</p>
          </div>
          <div className="col-lg-6">
            <figure className="featured-game mb-0">
              <img src={minecraft} alt="Escenario de Minecraft con casas y vegetación" width="800" height="450" fetchPriority="high" />
              <figcaption>
                <span className="eyebrow">EL ANTOJO DE LA SEMANA</span>
                <h2>Minecraft</h2>
                <p className="mb-0">Aventura y construcción · Dale forma a tu mundo</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
