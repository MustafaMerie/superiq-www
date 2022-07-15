import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import scroll_down from "../../images/scroll_down.svg";
import intro_video from "../../images/homepage_hero.mp4";
import "./style.css";

const Intro = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <section className="intro_section container">
      <Container>
        <Row>
          <Col className="content col-12">
            <div className="content_container">
              <div className="hero__video embed-responsive embed-responsive-21by9">
                <div className="hero__video__overlay"></div>
                <video
                  className="intro_video embed-responsive-item"
                  src={intro_video}
                  playsInline
                  loop
                  muted
                  controls
                  ref={videoEl}
                ></video>
              </div>

              <div className="hero__content">
                <h1>شلون رح تستخدم القوة الخارقة مالتك؟</h1>
              </div>
              <div className="btn_more_container">
                <a href="#what_is_superiq" variant="none" className="btn_more">
                  أسحب للاسفل لمعرفة المزيد
                  <img src={scroll_down} alt="scroll down" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;
