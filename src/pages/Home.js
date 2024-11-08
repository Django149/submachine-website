import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Home.css"
import "../styles/Global.css"
import "../styles/Buttons.css"
import "../styles/Responsive.css"
import "../styles/animated.css"
import sliderDec from "../assets/images/image3.png"
import headingLineDec from "../assets/images/heading-line-dec.png"
import ccImage from "../assets/images/cc-no-bg.png"

/**
 * Home component representing the landing page.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  const navigate = useNavigate()
  const [activeFaq, setActiveFaq] = useState(null)

  const handlePlanSelect = (planType) => {
    navigate(`/plans/${planType}`)
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div>
      {/* Banner Section */}
      <div
        id="home"
        className="main-banner wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>כתוביות אוטומטיות בעברית עבור Premiere Pro</h2>
                        <p>אנחנו SubMachine יוצרי הכתוביות הכי טובים בארץ</p>
                        <div className="gradient-button">
                          <a href="#pricing">התחילו עכשיו</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={sliderDec} alt="Banner Decoration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2">
              <div
                className="section-heading wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  מגוון רחב של <em>שירותים</em>
                </h4>
                <img
                  className="headingLineDec"
                  src={headingLineDec}
                  alt="Heading Decoration"
                />
                <p>
                  שדרג את ייצור הווידאו שלך עם כתוביות אוטומטיות ומדויקות ישירות
                  ב-Premiere Pro
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-container">
          <div className="services-row">
            <div className="service-item first-service">
              <div className="icon"></div>
              <h4>תחזוקת האפליקציה</h4>
              <p>
                עדכונים ושיפורים רציפים מבטיחים איכות ותפקוד ברמה הגבוהה ביותר
                לכל הפרויקטים שלך.
              </p>
            </div>
            <div className="service-item second-service">
              <div className="icon"></div>
              <h4>דיוק בלתי רגיל</h4>
              <p>
                אנחנו מציעים תרגום עם רמת דיוק מעולה של קרוב ל-100 אחוזי הצלחה.
              </p>
            </div>
            <div className="service-item third-service">
              <div className="icon"></div>
              <h4>תמיכה</h4>
              <p>אנחנו זמינים כדי לסייע בכל שאלה או בעיה שעולה.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2">
              <div className="section-heading">
                <h4>
                  יש לנו את <em>התמחור</em> הכי טוב שתקבלו
                </h4>
                <img
                  className="headingLineDec"
                  src={headingLineDec}
                  alt="Heading Decoration"
                />
                <p>לא משנה איזה סוג של עורך אתם, יש לנו תמחור פשוט עבורכם</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>עורך מתחיל</h4>
                <div className="icon">
                  <img src={ccImage} alt="Basic Plan Icon" />
                </div>
                <ul>
                  <li>עד 30 דקות תמלול כל חודש</li>
                  <li>תמיכה בכמה עורכים במקביל</li>
                  <li>כתוביות בעברית</li>
                  <li>תמיכה בפרימייר</li>
                </ul>
                <div className="border-button">
                  <a href="#install">שדרג עכשיו</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4 className="plan-name">עורך מקצועי</h4>
                <div className="icon">
                  <img src={ccImage} alt="Pro Plan Icon" />
                </div>
                <ul>
                  <li>עד 120 דקות תמלול כל חודש</li>
                  <li>תמיכה בכמה עורכים במקביל</li>
                  <li>כתוביות בעברית</li>
                  <li>תמיכה בפרימייר</li>
                </ul>
                <div className="border-button">
                  <a href="#install">שדרג עכשיו</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>עורך פרימיום</h4>
                <div className="icon">
                  <img src={ccImage} alt="Premium Plan Icon" />
                </div>
                <ul>
                  <li>עד 500 דקות תמלול כל חודש</li>
                  <li>תמיכה בכמה עורכים במקביל</li>
                  <li>כתוביות בעברית</li>
                  <li>תמיכה בפרימייר</li>
                </ul>
                <div className="border-button">
                  <a href="#install">שדרג עכשיו</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="faq-section section">
        <div className="container">
          <div
            className="section-heading wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <h4>
              <em>שאלות נפוצות</em>
            </h4>
            <img
              className="headingLineDec"
              src={headingLineDec}
              alt="Heading Decoration"
            />
            <p>כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר של לקוחותינו</p>
          </div>

          <div className="faq-container" dir="rtl">
            {[
              {
                question: "כמה מדוייק הכתוביות שיוצאות?",
                answer:
                  "לחולל תלוי באיכות ההקלטה והסאונד, בדרך כלל הדיוק הוא עד 98% עם הקלטות טובות. ו85% באיכות סאונד סבירה.",
              },
              {
                question: "האם אוכל לנסות את המוצר לפני שאקנה?",
                answer:
                  "ברור. לאחר הרשמה והתקנה של הפלאגין, יהיו לכם כמה דקות תמלול חינם להתנסות, עלינו.",
              },
              {
                question: "איך מתקינים?",
                answer: "בעמוד החשבון שלכם תוכלו למצוא את הוראות ההתקנה",
              },
              {
                question: "באילו תוכנות עריכה יש תמיכה?",
                answer: "תומכים בפרמייר ובקרוב גם באפטר אפקטס",
              },
              {
                question:
                  "אני עובד בחברה עם כמה עורכים, האם כולנו נוכל להשתמש ב SubMacine במקביל?",
                answer: "אצלנו בכל תוכנית אפשר להשתמש ב SubMacine בו זמנית",
              },
              {
                question: "יש לי Mac",
                answer: "עובד גם על Mac וגם על Windows.",
              },
              {
                question: "מה ההבדל בינכם לבין מתחרים?",
                answer:
                  "ישנם שני הבדלים ניכרים מאוד בינינו לבין מתחרים. איכות התמלול בעברית, סביבת הפרימייר שמתאימה במיוחד לעורכים מקצועיים בדיוק בסביבת העבודה שלהם והכי חשוב - מחירים זולים במיוחד",
              },
              {
                question: "האם אני יכול לבטל את המנוי בכל עת?",
                answer: "כמובן, אין אצלנו שום התחייבות.",
              },
              {
                question: "למי עלי לפנות כדי לקבל תמיכה?",
                answer:
                  "שחר ואופק נציגי השירות שלנו ישמח לעזור לכם בכל בעיה שתהיה. ניתן לפנות אלינו באימייל submachine100@gmail.com או בטלפון ******",
              },
            ].map((faq, index) => (
              <div className="faq-item" key={index}>
                <h4 className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                </h4>
                {activeFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
