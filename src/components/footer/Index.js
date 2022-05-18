import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import icon_fb from "../../images/icon_fb.svg";
import icon_ig from "../../images/icon_ig.svg";
import bloom_academy_logo from "../../images/bloom_academy_logo.svg";

const Footer = () => {
  return (
    <footer className="mb-md-5">
      <Container className="footer_container">
        <Row>
          <Col xs={12} md={6}>
            <img className="footer_logo" src={bloom_academy_logo} alt="logo" />
          </Col>
          <Col xs={4} md={2}>
            <p className="strong">المزيد</p>
            <a
              href="https://academy.bloom.pm/ar/blog/"
              target="_blank"
              rel="noreferrer"
            >
              المدونة
            </a>
            <p className="mt-2">تــابــعــونــا</p>
            <a
              className="me-2"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon_fb} alt="facebook link" />
            </a>
            <a
              href="https://www.instagram.com/super.iraqis"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon_ig} alt="instagram link" />
            </a>
          </Col>

          <Col xs={4} md={2}>
            <p className="strong">صفحات</p>
            <a
              href="https://academy.bloom.pm/ar/faq/"
              target="_blank"
              rel="noreferrer"
            >
              الاسئلة الشائعة
            </a>
          </Col>

          <Col xs={4} md={2}>
            <p className="strong">الاكاديمية</p>
            <a
              href="https://academy.bloom.pm/ar"
              target="_blank"
              rel="noreferrer"
            >
              البرامج
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
