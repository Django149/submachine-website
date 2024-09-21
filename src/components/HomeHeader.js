import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { auth } from "../services/firebase-config"
import { signOut } from "firebase/auth"
import logo from "../assets/images/submachine-logo-no-bg.png"
import "./HomeHeader.css"
import "../Responsive.css"
import "../animated.css"

const HomeHeader = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State to track login status
  const location = useLocation()

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setIsSticky(scrollTop > 200)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged in as:", user.email) // Debug: log the email of the logged in user
        setIsLoggedIn(true)
      } else {
        console.log("Not logged in")
        setIsLoggedIn(false)
      }
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      unsubscribe() // Cleanup the subscription
    }
  }, [])

  const isActive = (path) => {
    return (
      location.hash === path ||
      (path === "#home" && location.pathname === "/" && location.hash === "")
    )
  }

  const handleSignOut = async () => {
    await signOut(auth)
    console.log("Signing out...")
    setIsLoggedIn(false) // Update the login status
  }

  return (
    <header
      className={`header-area header-sticky wow slideInDown ${
        isSticky ? "background-header" : ""
      }`}
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img class="logo" src={logo} alt="Chain App Dev" />
              </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link
                    to="/#home"
                    className={isActive("#home") ? "active" : ""}
                  >
                    בית
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link
                    to="/#services"
                    className={isActive("#services") ? "active" : ""}
                  >
                    שירותים
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link
                    to="/#pricing"
                    className={isActive("#pricing") ? "active" : ""}
                  >
                    תמחור
                  </Link>
                </li>

                <li className="scroll-to-section">
                  <Link to="/#faq" className={isActive("#faq") ? "active" : ""}>
                    שאלות נפוצות
                  </Link>
                </li>

                {isLoggedIn && (
                  <li className="scroll-to-section">
                    <Link
                      to="/dashboard"
                      className={isActive("/dashboard") ? "active" : ""}
                    >
                      Dashboard
                    </Link>
                  </li> // Dashboard link
                )}
                {isLoggedIn ? (
                  <li>
                    <div className="gradient-button">
                      <Link to="/" onClick={handleSignOut}>
                        התנתק
                      </Link>
                    </div>
                  </li>
                ) : (
                  <li>
                    <div className="gradient-button">
                      <Link
                        to="/login"
                        className={isActive("/login") ? "active" : ""}
                      >
                        הצטרפו כאן
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
