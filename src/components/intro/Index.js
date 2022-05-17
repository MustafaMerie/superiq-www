import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import scrollDown from "../../images/scroll_down.svg";
import "./style.css";

const Intro = () => {
  return (
    <section className="intro_section container">
      <Container>
        <Row>
          <Col className="content">
            <div className="caption">
              <h1>شلون رح تستخدم القوة الخارقة مالتك؟</h1>
              <Button variant="none" className="btn_more">
                أسحب للاسفل لمعرفة المزيد
                <img src={scrollDown} alt="scroll down" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
