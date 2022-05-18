import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import scroll_down from "../../images/scroll_down.svg";
import "./style.css";

const Intro = () => {
  return (
    <section className="intro_section container">
      <Container>
        <Row>
          <Col className="content">
            <div className="caption">
              <h1>شلون رح تستخدم القوة الخارقة مالتك؟</h1>
              <a href="#what_is_superiq" variant="none" className="btn_more">
                أسحب للاسفل لمعرفة المزيد
                <img src={scroll_down} alt="scroll down" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
