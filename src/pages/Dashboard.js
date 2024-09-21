import React, { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { fetchUserData } from "../services/realtimeDatabaseService"
import "./Dashboard.css"
import headingLineDec from "../assets/images/heading-line-dec.png"
import { ProgressBar } from "react-bootstrap"
import "../Responsive.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork, MdDownload } from "react-icons/md"
import { IoExtensionPuzzle } from "react-icons/io5"
import { GoVerified } from "react-icons/go"
import ccImage from "../assets/images/cc-no-bg.png"

import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"

const Dashboard = () => {
  const { currentUser } = useAuth()
  const [userDetails, setUserDetails] = useState({
    minutesUsed: 0,
    planName: "Basic",
    timeLeft: 0,
  })

  useEffect(() => {
    const getUserData = async () => {
      if (currentUser?.uid) {
        const userData = await fetchUserData(currentUser.uid)
        console.log("user data: " + userData)
        if (userData) {
          setUserDetails({
            planName: userData.planName,
            timeLeft: userData.timeLeft,
          })
        } else {
          console.error("No data available")
        }
      }
    }

    getUserData()
  }, [currentUser])

  const handleUpgrade = () => {
    console.log("Upgrade plan")
    // Navigate to upgrade page or handle upgrade logic here
  }

  const toMin = (seconds) => {
    return (
      Math.floor(seconds / 60) +
      ":" +
      (seconds % 60).toString().padStart(2, "0")
    )
  }

  const percentageUsed = (userDetails.timeLeft / 7200) * 100

  return (
    <div>
      {/* Increased separation for the My Plan section */}
      <div id="my-plan" className="container large-spacing">
        <h2 className="mb-3">התוכנית שלי</h2>
        <p>השתמשת ב {toMin(userDetails.timeLeft)} מתוך 120</p>
        <ProgressBar
          dir="ltr"
          now={percentageUsed}
          label={`${percentageUsed.toFixed(0)}% Used`}
        />
      </div>
      <div id="updgrade-plan" class="pricing-tables">
        <div class="container">
          <div class="row">
            <div class="offset-lg-2">
              <div class="section-heading">
                <h4>
                  יש לנו את <em>התמחור</em> הכי טוב שתקבלו
                </h4>
                <img src={headingLineDec} alt="" />
                <p>לא משנה איזה סוג של עורך אתם, יש לנו תמחור פשוט עבורכם</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing-item-regular">
                <span class="price">$12</span>
                <h4>עורך מתחיל</h4>
                <div class="icon">
                  <img src={ccImage} alt="" />
                </div>
                <ul>
                  <li>עד 30 דקות תמלול כל חודש</li>
                  <li>תמיכה בכמה עורכים במקביל</li>
                  <li>כתוביות בעברית</li>
                  <li>תמיכה בפרימייר</li>
                </ul>
                <div class="border-button">
                  <a href="#">שדרג עכשיו</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing-item-pro">
                <span class="price">$25</span>
                <h4 class="plan-name">עורך מקצועי</h4>
                <div class="icon">
                  <img src={ccImage} alt="" />
                </div>
                <ul>
                  <li>עד 120 דקות תמלול כל חודש</li>
                  <li>תמיכה בכמה עורכים במקביל</li>
                  <li>כתוביות בעברית</li>
                  <li>תמיכה בפרימייר</li>
                </ul>
                <div class="border-button">
                  <a href="#">שדרג עכשיו</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing-item-regular">
                <span class="price">$66</span>
                <h4 class>עורך פרימיום</h4>
                <div class="icon">
                  <img src={ccImage} alt="" />
                </div>
                <ul>
                  <li>עד 500 דקות תמלול כל חודש</li>
                  <li>תמיכה בכמה עורכים במקביל</li>
                  <li>כתוביות בעברית</li>
                  <li>תמיכה בפרימייר</li>
                </ul>
                <div class="border-button">
                  <a href="#">שדרג עכשיו</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="install" class="installation-instructions section" dir="ltr">
        <div class="container">
          <div class="section-heading" dir="rtl">
            <h4>
              הוראות <em>התקנה</em>
            </h4>
            <img src={headingLineDec} alt="" />

            <Alert
              className="container"
              severity="warning"
              style={{ textAlign: "right", width: "400px", marginTop: "20px" }}
            >
              <div style={{ marginRight: "10px" }}>
                <AlertTitle>שימו לב</AlertTitle>
                הפלאגין יעבוד רק לפרמייר/אפטר גרסא 23 ומעלה. <br />
                בנוסף, לפני התתקנה, סגרו את פרמייר ואפטר.
              </div>
            </Alert>
          </div>
        </div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdDownload />}
          >
            <div dir="rtl">
              <h3 className="vertical-timeline-element-title">
                הורדת ZXP installer{" "}
              </h3>
              <p>
                הורידו והתקינו את ZXP Installer המתאים למערכת ההפעלה שלכם.
                <a href="https://aescripts.com/learn/zxp-installer/">
                  &nbsp; לעמוד ההתקנה לחצו כאן
                </a>
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdDownload />}
          >
            <div dir="rtl">
              <h3 className="vertical-timeline-element-title">הורדת הפלאגין</h3>
              <p>
                הורידו את הפלאגין למערכת ההפעלה שלכם{" "}
                <a href="https://aescripts.com/learn/zxp-installer/">
                  &nbsp; להתקנה לחצו כאן
                </a>
              </p>{" "}
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoExtensionPuzzle />}
          >
            <div dir="rtl">
              <h3 className="vertical-timeline-element-title">הטמעת הפלאגין</h3>

              <p>
                פתחו את ה-ZXP INSTALLER וגררו את הפלאגין אליו.
                <br />
                אם אתם לא מצליחים לגרור את הפלאגין, נסו לעשות File -&gt; Open
                ובחרו את קובץ ה-ZXP.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "rgb(144, 238, 144)", color: "#fff" }}
            icon={<GoVerified />}
          >
            <div dir="rtl">
              <h3 className="vertical-timeline-element-title">
                סיימתם את ההתקנה !{" "}
              </h3>
              <p>
                לאחר הפעלת הפלאגין, התחברו עם השם משתמש והסיסמא שהשתמשתם בהרשמה.
                זהו, תהנו!
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div dir="rtl">
          <Alert
            className="container"
            severity="info"
            style={{
              textAlign: "right",
              width: "500px",
              marginTop: "50px",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              אם יש לכם בעיה עם אחד מהשלבים, צרו איתנו קשר במייל, נשמח לעזור:
              submachine100@gmail.com / WhatsApp *****
            </div>
          </Alert>
        </div>
      </div>{" "}
    </div>
  )
}

export default Dashboard
