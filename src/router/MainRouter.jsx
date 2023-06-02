import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Skills from "../pages/skills/Skills";
import About from "../pages/about/About";
import Experience from "../pages/experience/Experience";
import Certifications from "../pages/certifications/Certifications";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
