const categorias = [
  { nombre: "Acción", descripcion: "Un toque de adrenalina en cada partida." },
  { nombre: "Aventura", descripcion: "Historias para disfrutar sin afán." },
  { nombre: "Carreras", descripcion: "Velocidad hasta el último segundo." },
  { nombre: "Estrategia", descripcion: "La mezcla perfecta de ingenio y paciencia." },
];

function Categorias() {
  return (
    <section className="section-space categories-section" id="categorias" aria-labelledby="titulo-categorias">
      <div className="container">
        <p className="eyebrow">ELIGE TU SABOR</p>
        <h2 id="titulo-categorias">¿Qué te provoca jugar?</h2>
        <div className="row g-3 mt-3">
          {categorias.map((categoria, indice) => (
            <div className="col-sm-6 col-lg-3" key={categoria.nombre}>
              <article className="category h-100">
                <span className="category-number" aria-hidden="true">0{indice + 1}</span>
                <h3>{categoria.nombre}</h3>
                <p className="mb-0">{categoria.descripcion}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categorias;
