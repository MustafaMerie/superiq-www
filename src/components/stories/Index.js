import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const Storeis = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    dots: true,
    arrows: false,
    centerPadding: "10%",
    slidesToShow: 1,
    speed: 500,
    rtl: true,
  };

  const data = [
    {
      id: 1,
      quote:
        "اهتم بأن تحصل على ما تحبه، و الا ستكون مجبراً على ان تقبل ما تحصل عليه",
      name: "الاسم الكامل",
      bio: "وصف مبسط عن الشخص",
      photo: require("../../images/stories/icon_avatar.svg"),
    },
    {
      id: 2,
      quote:
        "اهتم بأن تحصل على ما تحبه، و الا ستكون مجبراً على ان تقبل ما تحصل عليه هنا",
      name: "الاسم هنا",
      bio: "وصف مبسط عن الشخص هنا",
      photo: require("../../images/stories/icon_avatar.svg"),
    },
  ];

  return (
    <section className="stories">
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              {data.map((person) => (
                <div className="slider_content">
                  <h3 className="quote"> {person.quote}</h3>
                  <div className="person">
                    <div className="person_info">
                      <div className="person_info_caption">
                        <h2 className="name">{person.name}</h2>
                        <p className="bio">{person.bio}</p>
                      </div>
                      <img src={person.photo.default} alt="person avatar" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Storeis;
