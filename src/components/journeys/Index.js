import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon_arrow_up from "../../images/icon_arrow_up.svg";
import "./style.css";

const Journeys = () => {
  const journeysList = [
    {
      id: 1,
      caption:
        "هذا الصديق رام، بعد تقديمه وحصوله على القبول بوحدة من احسن المدارس بالعالم الي اسمها UWC احتاج مساعدة مالية حتى يغطي تكاليف السفر والمعيشة. رام يريد يروح لهذي المدرسة حتى يتعلم العزف وعلم النفس. تكدرون ان تشوفون قصة رام الكاملة بالضغط على الروابط التالية",
      en_version: "www.google.com",
      ar_version: "www.google.com",
    },
    {
      id: 2,
      caption:
        "الصديقة مينا دتتعلم تصميم الاثاث وعندها فكرة مشروع تصميم كرسي من الخوص العراقي بالتعاون مع حرفيين عراقيين حتى هم تسوي تصميم جديد مميز يبرز التراث العراقي وهم تتعلم من الحرفيين المحليين. المشروع يتطلب مواد اولية تحتاج ان تشتريها مينا وتحتاج مساعدة مادية حتى تشتريها.",
      en_version: "www.google.com",
      ar_version: "www.google.com",
    },
    {
      id: 3,
      caption:
        "الصديق اسامة كلش يحب الرياضة ويعتبرها جزء اساسي من حياته ويحب ان يشارك شغفه هذا ويه اهل مدينته فيريد ينظم بطولة برياضة الساحة والميدان ويستقطب طلاب المدارس حتى يقضون وقتهم على اشياء نافعة بدل ما يضيعون وقتهم بالمقاهي وصالات الالعاب فقط.",
      en_version: "www.google.com",
      ar_version: "www.google.com",
    },
    {
      id: 4,
      caption:
        "احد الاصدقاء يريد ان يخوض بتجربة السفر والعمل على مشاريع فنية بالريف بتركيا، فبحث ووجد مزرعة معينة بمدينة موراتلار تستقبل ضيوف وبالمقابل يساعدهم بشغل المزرعة كم ساعة باليوم، بس هذا الصديق ممجرب السفر بالسابق ويحتاج توجيه حتى يخطط رحلة السفر مالته.",
      en_version: "www.google.com",
      ar_version: "www.google.com",
    },
    {
      id: 5,
      caption:
        "احدى الصديقات تواجه صعوبات بالتواصل والتعامل مع المجتمع ومقضية حياتها معضمها ممختلطة بناس غير اهلها واصدقائها المقربين. صديقتنا تريد ان تتغلب على هذه الرهبة وتبدي تختلط بمجتمع داعم ومتقبل ومابي تنمر. وعندها طموح كبير ان تصير عندها القابلية ان تتحدث كدام جمهور كبير بدون ان يصير عندها رهبة وتحتاج الى تدريب بهذا المجال والى فرص تتيحلها ان تجرب هذا الشي.",
      en_version: "www.google.com",
      ar_version: "www.google.com",
    },
  ];

  return (
    <section className="journeys">
      <Container fluid>
        <Row className="journeys_intro">
          <Col xs={11} className="journeys_intro_col">
            <div className="journeys_intro_caption blue_color">
              <h1 className="title">
                من خلال منحة سوبر عراقي، راح ندعم اشخاص حتى يخوضون تجارب مفيدة
                تقربهم من تحقيق احلامهم
              </h1>
              <p className="text">
                لذلك اطلقنا هذه المنحة، حتى نشتغل سوية وية الناس الي عدهم
                الاستعداد ان يطلقون العنان لقوة الاصرار الخارقة مالتهم وجاهزين
                ان يبذلون جهد ويكونون متفانين حتى يحققون احلامهم
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1 className="blue_color py-5 text-end">امثلة على تجارب مفيدة</h1>
          </Col>
        </Row>
        <Row>
          {journeysList.map((joureny) => (
            <Col xs={11} md={5} className="journey_box" key={joureny.caption}>
              <p className="journey_caption">{joureny.caption}</p>
              <div>
                <a
                  className="journey_link"
                  href={joureny.en_version}
                  target="_blank"
                  rel="noreferrer"
                >
                  رابط المنشور الاصلي باللغة الانكليزية{" "}
                  <img src={icon_arrow_up} alt="icon_arrow_up"></img>
                </a>
              </div>

              <div>
                <a
                  className="journey_link"
                  href={joureny.ar_version}
                  target="_blank"
                  rel="noreferrer"
                >
                  رابط المنشور مترجم الى العربية بواسطة Google Translate{" "}
                  <img src={icon_arrow_up} alt="icon_arrow_up"></img>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Journeys;
