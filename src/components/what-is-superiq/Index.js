import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import your_super_power from "../../images/your_super_power.png";
import "./style.css";

const WhatIsSuperiq = () => {
  return (
    <section className="what_is_superiq">
      <Container>
        <Row className="flex-lg-row-reverse">
          <Col xs={10} lg={6} className="what_is_superiq_caption m-auto">
            <h1 className="title blue_color">شنو هي منح سوبر عراقي؟</h1>
            <p className="caption">
              احنه نؤمن انو كل انسان عراقي عنده قوة بداخله، تخليه يكدر يتحمل
              الظروف الصعبة الي تولدت نتيجة صعوبة الحياة الي ترعرعنا بيها، بس
              احنة اغلبنا عايشين حياتنا بدون ان ندرك هذه القوة الي عدنا، والي
              بالحقيقة لو استغليناها فهي راح تمكننا من ان نستثمر اصغر واكبر
              الفرص الي تمر علينا بالاصرار والعزيمة الي عندنا. واحنه مو
              الوحيدين، اكو ناس هواية اخريين طالعين من ظروف صعبة ادركو هاي القوة
              عندهم وغيرو حياتهم بعد ما عرفو بيها واستغلوها! قلبو بالستوري ادناه
              حتى تتعرفون عليهم وعلى قصصهم
            </p>
          </Col>
          <Col className="text-center text-lg-start" xs={12} lg={6}>
            <img
              className="super_power_img img-fluid"
              src={your_super_power}
              alt="what is your super power?"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatIsSuperiq;
