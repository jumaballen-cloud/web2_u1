function BotonFavorito({ nombre, esFavorito, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-favorite"
      aria-pressed={esFavorito}
      aria-label={`${esFavorito ? "Quitar" : "Agregar"} ${nombre} ${esFavorito ? "de" : "a"} favoritos`}
      onClick={onClick}
    >
      <span aria-hidden="true">{esFavorito ? "♥" : "♡"}</span>{" "}
      {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
}

export default BotonFavorito;
