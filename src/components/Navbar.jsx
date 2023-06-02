import React, { useState } from "react";
import PropTypes from "prop-types";
import { Admin, Page, Code, AbTest, TextImage, Email } from "@rsuite/icons";
import { Nav } from "rsuite";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeKey, setActiveKey] = useState();

  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  NavLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
  };

  return (
    <Nav
      justified
      appearance="tabs"
      activeKey={activeKey}
      onSelect={setActiveKey}
    >
      <Nav.Item icon={<Admin />} eventKey="About" as={NavLink} href="/about">
        Sobre mí
      </Nav.Item>
      <Nav.Item
        icon={<Page />}
        eventKey="Experience"
        as={NavLink}
        href="/experience"
      >
        Experiencia
      </Nav.Item>
      <Nav.Item
        icon={<Code />}
        eventKey="Projects"
        as={NavLink}
        href="/projects"
      >
        Proyectos
      </Nav.Item>
      <Nav.Item icon={<AbTest />} eventKey="Skills" as={NavLink} href="/skills">
        Habilidades
      </Nav.Item>
      <Nav.Item
        icon={<TextImage />}
        eventKey="Certifications"
        as={NavLink}
        href="/certifications"
      >
        Certificaciones
      </Nav.Item>
      <Nav.Item
        icon={<Email />}
        eventKey="Contact"
        as={NavLink}
        href="/contact"
      >
        Contacto
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
