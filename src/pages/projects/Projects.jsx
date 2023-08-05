import { Button, Carousel, Panel, Stack, Tag, TagGroup } from "rsuite";
import { useEffect, useState } from "react";
import { ProjectsData } from "./data";
import { Icon } from "@rsuite/icons";
import { DiGithubBadge } from "react-icons/di";
import GlobalIcon from "@rsuite/icons/Global";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState({});

  const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

  useEffect(() => {
    setCurrentProject(ProjectsData[activeIndex]);
    console.log(currentProject.badges);
  }, [activeIndex]);

  return (
    <Panel bordered>
      <Carousel
        className="Projects"
        activeIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}
      >
        <img src="src/assets/img/proj-game-of-life.webp" height="250" />
        <img src="src/assets/img/proj-collatz.webp" height="250" />
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
      <TagGroup>
        {currentProject["badges"].map((badge, i) => {
          return (
            <Tag key={badge} color={colors[i]}>
              {badge}
            </Tag>
          );
        })}
      </TagGroup>
      <p>{currentProject.description}</p>
      <Stack justifyContent="center">
        <Button appearance="link">
          <Icon as={DiGithubBadge} style={{ fontSize: "60px" }} />
        </Button>
        <Button appearance="link">
          <Icon as={GlobalIcon} style={{ fontSize: "45px" }} />
        </Button>
      </Stack>
    </Panel>
  );
};

export default Projects;
