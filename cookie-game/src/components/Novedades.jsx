const novedades = [
  {
    tipo: "Recomendación",
    titulo: "Tu primera construcción en Minecraft",
    descripcion: "Empieza con un refugio pequeño y organiza tus materiales antes de explorar más lejos.",
  },
  {
    tipo: "Para descubrir",
    titulo: "Estrategia con 0 A.D.",
    descripcion: "Una opción para quienes disfrutan gestionar recursos y planear el crecimiento de una ciudad.",
  },
  {
    tipo: "Recomendación",
    titulo: "Cambia de ritmo con SuperTuxKart",
    descripcion: "Si buscas una partida de carreras, prueba sus circuitos y encuentra tu personaje favorito.",
  },
];

function Novedades() {
  return (
    <section className="section-space news-section" id="novedades" aria-labelledby="titulo-novedades">
      <div className="container">
        <p className="eyebrow">ALGO MÁS PARA PROBAR</p>
        <h2 id="titulo-novedades">Novedades y recomendaciones</h2>
        <div className="row g-4 mt-3">
          {novedades.map((novedad) => (
            <div className="col-md-4" key={novedad.titulo}>
              <article className="news-card h-100">
                <p className="game-genre">{novedad.tipo}</p>
                <h3>{novedad.titulo}</h3>
                <p className="mb-0">{novedad.descripcion}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Novedades;
