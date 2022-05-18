import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon_plane from "../../images/our_support/icon_plane.svg";
import icon_couch from "../../images/our_support/icon_couch.svg";
import icon_car from "../../images/our_support/icon_car.svg";
import icon_bag from "../../images/our_support/icon_bag.svg";
import icon_money from "../../images/our_support/icon_money.svg";
import icon_tools from "../../images/our_support/icon_tools.svg";
import "./style.css";

const OurSupport = () => {
  return (
    <section className="our_support py-5 text-end">
      <Container className="our_support_container">
        <Row>
          <Col>
            <h1 className="blue_color pb-3">انواع الدعم الي تقدمه المنحة</h1>
            <p>:الدعم الي رح نقدمه للمستفيدين من هذه المنحة يتضمن</p>

            <p className="pt-3 pb-3">
              <strong>دعم مادي</strong> - دعمنا المادي محدود يكفي ان يغطي تكاليف
              بسيطة. امثله على التكاليف الي ممكن نوفر الها دعم مادي
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row-reverse">
            <div className="icon icon_plane">
              <img src={icon_plane} alt="icon"></img> الــسفـــر
            </div>
            <div className="icon icon_couch">
              <img src={icon_couch} alt="icon"></img> الــمــعــيــشــة
            </div>
            <div className="icon icon_car">
              <img src={icon_car} alt="icon"></img> الــنقــل
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex flex-row-reverse">
            <div className="icon icon_bag">
              <img src={icon_bag} alt="icon"></img> المواد الاولية
            </div>
            <div className="icon icon_tools">
              <img src={icon_tools} alt="icon"></img> الادوات
            </div>
            <div className="icon icon_money">
              <img src={icon_money} alt="icon"></img> وغيرها من التكاليف
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="pt-5 pb-3">
              <strong>تدريب</strong> - المستفيدين من المنحة ممكن ان يحصلون على
              نوعين من التدريبات
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={11} md={12} className="m-auto our_support_ul">
            <ul className="m-0">
              <li>تدريبات مقدمة من قبل فريق المنحة</li>
              <li>
                تدريبات مقدمة من قبل اشخاص ومؤسسات اخرى ممكن ان توصلولها بمساعدة
                فريق المنحة
              </li>
              <li>
                علاقات مع اشخاص محققين انجازات بحياتهم وحابين ان يساعدون غيرهم
                بتحقيق انجازاتهم الخاصة (مثل الاشخاص الشفتوهم بالستوريات فوق).
              </li>
            </ul>
            <p className="our_support_bottom_p">
              مو ضروري من كل المتقدمين ان يريدون هذي الخدمات كلها، فاحنة رح
              ندعمكم بالطريقة التناسبكم.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurSupport;
