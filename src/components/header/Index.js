import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/superiq_logo.svg";
import icon_bars from "../../images/icon_bars.svg";
import icon_x from "../../images/icon_x.svg";
import "./style.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      <Navbar className="py-4" fixed="top" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="170"
              height="22"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          >
            {expanded ? (
              <img src={icon_x} alt="close navbar" />
            ) : (
              <img src={icon_bars} alt="open navbar" />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link onClick={() => setExpanded(false)} href="#home">
                شنو سوبر عراقي؟
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#link">
                أمثلة
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#link">
                انواع الدعم
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#link">
                قدم الآن
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#link">
                ادعم المشروع
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
