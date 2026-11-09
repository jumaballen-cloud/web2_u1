# Cookie Game

Una web para descubrir videojuegos y guardar tus favoritos. Desarrollada con React, Vite, React Router y Bootstrap. Conserva los colores y las imágenes locales de la landing original.

## Ejecutar

Instala Node.js 22.12 o superior. Abre una terminal en `cookie-game`:

```bash
npm ci
npm run dev
```

Abre la dirección que muestra Vite. Para compilar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Rutas

| Ruta | Vista | Función |
| --- | --- | --- |
| `/` | Inicio | Landing con presentación, categorías, juegos y novedades. |
| `/juegos` | Catalogo | Lista de los cuatro juegos. |
| `/juegos/:id` | DetalleJuego | Información del juego indicado en la URL. Ejemplo: `/juegos/minecraft`. |
| `/favoritos` | Favoritos | Juegos guardados y mensaje cuando la lista está vacía. |
| `*` | NoEncontrado | Página para una dirección inexistente. |

`BrowserRouter` está en `src/main.jsx`. Las rutas se declaran directamente con `Routes` y `Route` en `src/App.jsx`. `Link` permite cambiar de vista y `NavLink` resalta la opción actual. `useParams` obtiene el identificador del juego en la vista de detalle.

Al publicar, el servidor debe redirigir las rutas de la aplicación a `index.html` para que los enlaces directos funcionen. Vite ya lo hace al desarrollar. No abrir `index.html` con doble clic: esta versión utiliza rutas y necesita el servidor de desarrollo o un alojamiento configurado para una SPA. Se retiró la antigua vista previa estática porque correspondía a la landing sin rutas.

## Organización

- `src/App.jsx`: rutas, estado de favoritos y función para agregar o quitar.
- `src/main.jsx`: inicio de React, BrowserRouter y estilos.
- `src/data/juegos.js`: datos e identificadores estables de los juegos.
- `src/pages/`: Inicio, Catalogo, DetalleJuego, Favoritos y NoEncontrado.
- `src/components/`: elementos reutilizables de la interfaz.
- `src/components/Juegos.jsx`: lista de tarjetas.
- `src/components/JuegoCard.jsx`: tarjeta con enlace al detalle y botón de favoritos.
- `src/components/BotonFavorito.jsx`: botón compartido por tarjetas y detalle.
- `src/assets/`: imágenes locales.
- `src/styles.css`: colores, tarjetas y adaptación a pantallas pequeñas.

## Props y favoritos, paso a paso

1. `App` tiene un arreglo de identificadores en `useState`: por ejemplo, `["minecraft"]`.
2. Envía `juegos`, `favoritos` y `onCambiarFavorito` a las vistas mediante props.
3. `Juegos` recorre el arreglo con `map` y entrega los datos de cada juego a `JuegoCard`.
4. La tarjeta recibe `esFavorito` y llama a `onCambiarFavorito(id)` al pulsar el botón.
5. `App` agrega el identificador con un nuevo arreglo o lo quita con `filter`. Nunca modifica directamente el estado.
6. La vista Favoritos filtra los juegos cuyos identificadores están guardados. El contador del menú se actualiza con el mismo estado.
7. `useEffect` guarda los identificadores en `localStorage`. Al abrir la página se recuperan y se descartan datos inválidos. No hay cuentas ni sincronización entre dispositivos. Si el navegador bloquea el almacenamiento, los favoritos funcionan hasta recargar.

No se usa Context ni Redux: el estado compartido en `App` y las props son suficientes para esta estructura.

## Comprobación manual

- Navega desde Inicio a Juegos, Detalle y Favoritos.
- Agrega dos juegos y comprueba el contador y la lista.
- Quita un favorito desde el detalle y otro desde Favoritos.
- Comprueba el mensaje de lista vacía.
- Recarga después de agregar un juego: debe seguir guardado.
- Abre `/juegos/minecraft` directamente y prueba Atrás/Adelante.
- Abre `/juegos/no-existe` y `/ruta-inexistente`: deben mostrar el mensaje de página no encontrada.
- Revisa las tarjetas y el menú en móvil y escritorio.

Referencia: https://reactrouter.com/start/declarative/routing
