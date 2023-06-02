import { Timeline } from "rsuite";

const Experience = () => {
  return (
    <div className="Experience">
      <Timeline align="alternate" endless>
        <Timeline.Item>
          <p>2009</p>
          <p>Carreras universitarias (relacionadas a la música)</p>
          <small>Profesorado de música</small>
          <br />
          <small>Perfeccionamiento instrumental (piano)</small>
        </Timeline.Item>
        <Timeline.Item>
          <p>2013</p>
          <p>
            Fui <strong>papá</strong>
          </p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2015</p>
          <p>Egresé como Profesor de música</p>
          <p>Primeros trabajos como profesor</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2019</p>
          <p>Primeros intereses por la programación</p>
          <small>Aprendiendo HTML y CSS</small>
        </Timeline.Item>
        <Timeline.Item>
          <p>2020</p>
          <p>Fuerte interes por la programación</p>
          <small>Decido cambiar de carrera</small>
          <br />
          <small>Certificaciones de FreeCodeCamp</small>
        </Timeline.Item>
        <Timeline.Item>
          <p>2021</p>
          <p>Alkemy bootcamp</p>
          <small>Primera experiencia {"real"} en programación</small>
        </Timeline.Item>
        <Timeline.Item>
          <p>2022</p>
          <p>Primer trabajo como programador</p>
          <p>
            <strong>VelaONE</strong>
          </p>
          <small>Desarrollador web Frontend</small>
        </Timeline.Item>
        <Timeline.Item>
          <p>2023</p>
          <p>Estoy acá... (por ahora)</p>
          <p>¿Alguna nueva experiencia que quieras proponerme...?</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
