import React from "react"
import { Link } from "react-router-dom"
import "../styles/Footer.css"
import "../styles/Global.css"
import "../styles/Buttons.css"
import "../styles/Responsive.css"

const Footer = () => {
  return (
    <footer id="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Logo or additional footer content can be added here */}
            <div className="footer-widget text-center">
              <img src="path_to_logo" alt="SubMachine Logo" />
              <h4>SubMachine</h4>
              <p>
                כתובת, עיר, מדינה
                <br />
                טלפון: <Link to="tel:1234567890">123-456-7890</Link>
                <br />
                אימייל:{" "}
                <Link to="mailto:submachine100@gmail.com">
                  submachine100@gmail.com
                </Link>
              </p>
              <ul>
                <li>
                  <Link to="/privacy-policy">מדיניות פרטיות</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">תנאי שימוש</Link>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div className="copyright-text">
              <p>Copyright © 2024 SubMachine. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
