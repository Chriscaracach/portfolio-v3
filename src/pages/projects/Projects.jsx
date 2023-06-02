import { Carousel, Panel, Stack } from "rsuite";
import { useEffect, useState } from "react";
import { ProjectsData } from "./data";
import { Icon } from "@rsuite/icons";
import { DiGithub } from "react-icons/di";
import { Link } from "react-router-dom";
import GlobalIcon from "@rsuite/icons/Global";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    setCurrentProject(ProjectsData[activeIndex]);
  }, [activeIndex]);
  return (
    <Panel bordered>
      <Carousel
        className="Projects"
        activeIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}
      >
        <img src="src/assets/img/proj-game-of-life.webp" height="250" />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
          height="250"
        />
      </Carousel>
      <h3>{currentProject.title}</h3>
      <p>{currentProject.description}</p>
      <Stack>
        <Link>
          <Icon as={DiGithub} />
        </Link>
        <Link>
          <Icon as={GlobalIcon} />
        </Link>
      </Stack>
    </Panel>
  );
};

export default Projects;
