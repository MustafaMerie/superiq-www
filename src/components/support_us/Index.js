import React from "react";
import icon_yellow_heart from "../../images/icon_yellow_hart.svg";
import icon_strong from "../../images/icon_strong.svg";
import icon_confused from "../../images/icon_confused.svg";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const SupportUs = () => {
  return (
    <section className="support_us pt-5">
      <Container>
        <Row className="justify-content-between">
          <Col xs={11} lg={4} className="support_us_box">
            <div className="icon_box">
              {" "}
              <img className="icon" src={icon_yellow_heart} alt="heart icon" />
            </div>
            <h2 className="blue_color title">طريقة دعم المنحة</h2>
            <p>
              بالنيابة عن المشاركين بالمنحة، نحب ان نرحب بك الاشخاص الي يحبون ان
              يساهمون بالتغيير عن طريق الدعم الي يقدمو للمشاركين.
            </p>
            <p>
              اكبس على الزر ادناه وشاركنا بالطريقة الي تفضل ان نتواصل بيها وياك
              وكذلك وصف عن شنو هو نوع الدعم الي حاب ان تقدمه للمنحة وراح نتواصل
              وياك بعد ان يوصلنا ارسالك.
            </p>
            <a
              className="link"
              href="http://docs.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              املئ استمارة الدعم
            </a>
            <p>
              <small>.ممتنين لدعمكم</small>
            </p>
          </Col>

          <Col xs={11} lg={4} className="support_us_box">
            <div className="icon_box">
              {" "}
              <img className="icon" src={icon_strong} alt="strong icon" />
            </div>
            <h2 className="blue_color title">طريقة التقديم الى المنحة</h2>
            <p>
              املأ استمارة التقديم بالكبس على الزر ادناه، وحتى تزيد من فرصتك ان
              تنقبل، فكر ملياً بأسئلة الاستمارة وجاوب عليها بتأني وراجع كتاباتك
              قبل مترسلها.
            </p>
            <p>
              استمارة التقديم رح تبقى مفتوحة الى يوم ١٥-١-٢٠٢٢ الساعة ١١:٥٩
              مساءاً وبعدها رح نعتذر عن استلام المزيد من التقديمات.
            </p>
            <a
              className="link"
              href="http://docs.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              املئ استمارة التقديم
            </a>
            <p>
              <small>.باقي ٢ يوم على انتهاء فترة التقديم</small>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={11} lg={12} className="support_us_box">
            <div className="icon_box">
              {" "}
              <img className="icon" src={icon_confused} alt="strong icon" />
            </div>
            <p className="email_us">
              superiq@bloom.pm في حال عندكم سؤال او استفسار تكدرون تتواصلون
              ويانا على الايميل
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SupportUs;
