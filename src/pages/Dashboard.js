import React, { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { fetchUserData } from "../services/realtimeDatabaseService"
import "../styles/Dashboard.css"
import "../styles/Global.css"
import "../styles/Responsive.css"
import "react-vertical-timeline-component/style.min.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { MdDownload } from "react-icons/md"
import { IoExtensionPuzzle } from "react-icons/io5"
import { GoVerified } from "react-icons/go"
import ccImage from "../assets/images/cc-no-bg.png"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import headingLineDec from "../assets/images/heading-line-dec.png"

/**
 * Dashboard component displaying user plan and installation instructions.
 *
 * @returns {JSX.Element} The rendered Dashboard component.
 */
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
        console.log("user data: ", userData)
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
      {/* My Plan Section */}
      <div id="my-plan" className="container large-spacing">
        <h2 className="mb-3">התוכנית שלי</h2>
        <p>השתמשת ב {toMin(userDetails.timeLeft)} מתוך 120</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${percentageUsed}%` }}>
            {`${percentageUsed.toFixed(0)}% Used`}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="upgrade-plan" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2">
              <div className="section-heading">
                <h4>
                  <em>שדרגו</em> עכשיו וקבלו עוד זמן תמלול
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
                  <a href="#install">קנו עכשיו</a>
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
                  <a href="#install">קנו עכשיו</a>
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
                  <a href="#install">קנו עכשיו</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Instructions Section */}
      <div id="install" className="installation-instructions section" dir="ltr">
        <div className="container">
          <div className="section-heading" dir="rtl">
            <h4>
              הוראות <em>התקנה</em>
            </h4>
            <img
              className="headingLineDec"
              src={headingLineDec}
              alt="Heading Decoration"
            />
            <Alert
              severity="warning"
              className="container"
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
                הורדת ZXP installer
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
                <a href="https://download1655.mediafire.com/5qshizkvt3ngKCuUiWxzEh-h6j7d2HiVlmiVRCgqgzqkAdD2A_M6EtDJWiGLlmHPn5uHyJXOrg7pQU8uISiRrjfcubDJDEK8sj0XzOZqUVDWNTUSwTe0xS3H858DtC1rNHRJPgV0niqQZLtUTqz-HejGe-GlXhd3r6JxfcDbZrQ/2vuk9nlqe6wiiz5/com.offical.submachine.zxp">
                  &nbsp; להתקנה לחצו כאן
                </a>
              </p>
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
                סיימתם את ההתקנה !
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
      </div>
    </div>
  )
}

export default Dashboard
