import { List, Stack } from "rsuite";
import Image from "../../components/image/Image";
import { Icon } from "@rsuite/icons";
import { DiJsBadge, DiCss3, DiReact, DiLinux, DiHtml5 } from "react-icons/di";

const About = () => {
  return (
    <Stack alignItems="flex-start" className="About" spacing={20}>
      <Stack.Item>
        <Image
          path="src/assets/img/pic.jpeg"
          width={300}
          height={450}
          className="About-Image"
        />
        <div>
          <p>
            ¡Hola! Soy Christian, un <strong>desarrollador web frontend</strong>{" "}
            apasionado por el mundo de la tecnología y enamorado del ecosistema
            de <strong>React</strong>. Mi enfoque principal se encuentra en la
            creación de experiencias de usuario atractivas y funcionales que
            cumplan con los más altos estándares de calidad.{" "}
          </p>
          <p>
            Además de mi dedicación al desarrollo web, tengo una profunda pasión
            por <strong>Linux</strong> y su versatilidad. Como entusiasta de
            este sistema operativo, he adquirido un conocimiento sólido y una
            habilidad para aprovechar al máximo su potencial en el entorno de
            desarrollo.{" "}
          </p>
          <p>
            Además, destaco por mi habilidad en la{" "}
            <strong>documentación</strong>, lo cual me permite crear código
            claro y fácilmente comprensible para otros desarrolladores.
          </p>
          <p>
            Además de mi experiencia técnica, cuento con excelentes habilidades
            de <strong>comunicación</strong> y una actitud colaborativa. Me
            gusta trabajar en equipo, compartir ideas y contribuir a un ambiente
            de trabajo positivo y productivo. Creo firmemente en la importancia
            de la comunicación efectiva para el éxito de cualquier proyecto.{" "}
          </p>
          <p>
            Si estás buscando un desarrollador web frontend con pasión por la
            tecnología, un enfoque en el detalle y la estética, habilidades de
            comunicación excepcionales y una mentalidad de trabajo en equipo,{" "}
            <strong>¡no dudes en ponerte en contacto conmigo!</strong> Estoy
            emocionado de seguir creciendo profesionalmente y enfrentar nuevos
            desafíos junto a un equipo talentoso y motivado.{" "}
          </p>
        </div>
      </Stack.Item>
      <Stack.Item>
        <List>
          <List.Item>
            <Icon as={DiHtml5} size="5em" />
          </List.Item>
          <List.Item>
            <Icon as={DiJsBadge} size="5em" />
          </List.Item>
          <List.Item>
            <Icon as={DiCss3} size="5em" />
          </List.Item>
          <List.Item>
            <Icon as={DiReact} size="5em" />
          </List.Item>
          <List.Item>
            <Icon as={DiLinux} size="5em" />
          </List.Item>
        </List>
      </Stack.Item>
    </Stack>
  );
};

export default About;
