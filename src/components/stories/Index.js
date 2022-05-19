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
        "مرة كنت اشتغل بشركة برمجية عالمية بكندا وكنت كاعد ويه مديرة فريق التوظيف، المديرة كانت دتسولف عن تجربتها بتعيين مئات  الاشخاص وشلون استنتجت انه من افضل الموظفين الي تعينهم هم الي يجون من خلفيات ماريين بحياة صعبة من بلدنا مثل البرازيل، مصر والعراق. تعلمت انه اقوى صفة عندي هي قابليتي على تحمل الصعوبات والصمود بوججها واني جداً ممتن لهالشي",
      name: "مجتبى زهير",
      bio: "مبرمج",
      photo: require("../../images/stories/mujtaba.png"),
    },
    {
      id: 2,
      quote:
        "كنت عايشة ببيئة جدا سيئة بالعراق بحيث ابسط الحقوق ممتوفرة، بس دائما كان اكو شي بداخلي يكلي اكو تغيير راح يصير وانتي توكفين كدام الناس وتسولفين، حضرت هواي ورشات وتدربيات باماكن مختلفة بالعراق، وصار عندي هواي اصدقاء، وبديت اني اقدم هاي الورشات التدريبية وكدت اغير بحياة هواي ناس وبالاخص البنات، ماكو شي يصعب علينا لآن عشناه للصعب كلها دروس نتعلمها ونمشي بحياتنا، نعثر، نكوم نوكف من جديد، احنا الناس الحقيقين",
      name: "زينب فارس",
      bio: "طالبة صيدلة",
      photo: require("../../images/stories/zainab.png"),
    },
    {
      id: 3,
      quote:
        "القوى الي اخذتها من حياتي بالعراق هي قوى خارقة فعلا! خلتني اسوي اشياء جنت اتخيلها بيوم صعبة او مستحيلة مثل قدرتي على السفر وحدي ولاي مكان اكدر اوصلة بدون خوف من حجي الناس او. قوانين انفرضت علينا بدون حق",
      name: "رغد",
      bio: "استاذة جامعية في مجال البرمجة",
      photo: require("../../images/stories/raghad.png"),
    },
    {
      id: 4,
      quote:
        "عشت حياة ابداً مو سهلة، ٣ سنوات من حياتي مليانة ضغط وخوف ونختمت بحرب طاحنة، بعد ما مرت هاي الصعوبات صارت عندي قوة كبيرة واصرار انو اغير حياتي، وكنت استغل آي فرصة متاحة حتى اتعلم واطور من نفسي، وبعدها بديت اشتغل بشركة  وكنت المبرمج الوحيد بالشركة واني صارلي كم شهر من بديت اتعلم برمجة وهذا الشي سببلي كمية مخيفة من الضغط والتوتر بس اتحملته لان حياتي السابقة بالعراق كانت مليانة خوف وضغوطات",
      name: "محمد عبد الباري",
      bio: "مبرمج",
      photo: require("../../images/stories/muhammad.png"),
    },
    {
      id: 5,
      quote:
        "كعراقي مريت بظروف كلش صعبة وخصوصا اني عشت حرب داعش وانصابيت خلال هاي الحرب، كنت اكره العراق واتمنى اسافر للخارج،وكنت اظن انو العراق كلشي ما قدملي، ومن سافرت بديت المس الاشياء الي اخذتها من العراق مثل سرعة التأقلم مع البيئة الجديدة، طلعنا تخييم ونمت بدون غطا ع البحر بالشتا، كوني عراقي خلتني اكدر اشتغل تحت ضغط كبير بكل سلاسة، اني مؤمن بالي يكدر يصنع النجاح بداخل العراق فهو يكدر يصنعه بأي مكان بالعالم",
      name: "معتز علي",
      bio: "مبرمج",
      photo: require("../../images/stories/mutaz.png"),
    },
  ];

  return (
    <section className="stories">
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              {data.map((person) => (
                <div className="slider_content" key={person.name}>
                  <h3 className="quote blue_color">{person.quote}</h3>
                  <div className="person">
                    <div className="person_info">
                      <div className="person_info_caption">
                        <h2 className="name">{person.name}</h2>
                        <p className="bio">{person.bio}</p>
                      </div>
                      <img src={person.photo} alt="person avatar" />
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
