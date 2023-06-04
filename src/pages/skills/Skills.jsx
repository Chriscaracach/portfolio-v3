import { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Carousel,
  Divider,
  Stack,
} from "rsuite";

const Skills = () => {
  const filterList = {
    blur: { filter: "blur(10px)" },
    hueRotate: { filter: "hue-rotate(180deg)" },
    sepia: { filter: "sepia(80%)" },
    grayscale: { filter: "grayscale(100%)" },
    contrast: { filter: "contrast(300%)" },
  };
  const [galleryFilter, setGalleryFilter] = useState();

  // Calendario interactivo: Desarrolla un componente de calendario que muestre eventos, permita a los usuarios agregar nuevos eventos y les permita navegar por diferentes meses y años.

  // Mapa interactivo: Utiliza una biblioteca como Google Maps para crear un componente que muestre un mapa interactivo y permita a los usuarios buscar ubicaciones, agregar marcadores y obtener información adicional.

  // Carrusel de testimonios: Crea un componente de carrusel que muestre testimonios de clientes anteriores, con transiciones suaves entre cada testimonio.

  // Formulario de registro: Desarrolla un componente de formulario de registro que valide los campos, muestre mensajes de error y permita a los usuarios registrarse en tu sitio web.

  // Barra de búsqueda autocompletada: Crea un componente de barra de búsqueda que muestre sugerencias autocompletadas mientras los usuarios escriben, basado en una fuente de datos predefinida.

  // Menú desplegable de navegación: Desarrolla un componente de menú de navegación desplegable que muestre submenús al pasar el cursor sobre los elementos principales del menú.

  // Cronómetro o temporizador: Crea un componente que funcione como un cronómetro o temporizador, permitiendo a los usuarios iniciar, pausar y reiniciar el tiempo.

  // Gráficos interactivos: Utiliza una biblioteca como Chart.js para crear componentes de gráficos interactivos que muestren datos en forma de gráficos de barras, gráficos circulares, etc.

  // Editor de texto enriquecido: Desarrolla un componente que permita a los usuarios ingresar y editar texto con funciones de formato enriquecido, como negrita, cursiva, listas, enlaces, etc.

  return (
    <Stack
      direction="column"
      className="Skills"
      spacing={20}
      divider={<Divider />}
    >
      <h1>Bueno, a ver, mostrame qué podés hacer..</h1>
      {/* FILTER IMAGE GALLERY */}
      <Stack.Item>
        <Stack direction="column">
          <Carousel autoplay>
            <img
              src="https://picsum.photos/id/10/640/480"
              height="250"
              style={filterList[galleryFilter]}
            />
            <img
              src="https://picsum.photos/id/20/640/480"
              height="250"
              style={filterList[galleryFilter]}
            />
            <img
              src="https://picsum.photos/id/30/640/480"
              height="250"
              style={filterList[galleryFilter]}
            />
            <img
              src="https://picsum.photos/id/40/640/480"
              height="250"
              style={filterList[galleryFilter]}
            />
            <img
              src="https://picsum.photos/id/50/640/480"
              height="250"
              style={filterList[galleryFilter]}
            />
          </Carousel>
          <p>Algunos filtros</p>
          <Stack.Item>
            <ButtonToolbar>
              <ButtonGroup>
                <Button
                  appearance="primary"
                  onClick={() => setGalleryFilter("blur")}
                >
                  Blur
                </Button>
                <Button
                  appearance="primary"
                  onClick={() => setGalleryFilter("hueRotate")}
                >
                  Hue-Rotate
                </Button>
                <Button
                  appearance="primary"
                  onClick={() => setGalleryFilter("sepia")}
                >
                  Sepia
                </Button>
                <Button
                  appearance="primary"
                  onClick={() => setGalleryFilter("grayscale")}
                >
                  GrayScale
                </Button>
                <Button
                  appearance="primary"
                  onClick={() => setGalleryFilter("contrast")}
                >
                  Contrast
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default Skills;
