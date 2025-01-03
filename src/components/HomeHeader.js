import React, { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { auth } from "../services/firebase-config"
import { signOut } from "firebase/auth"
import logo from "../assets/images/submachine-logo-text-no-bg.png"
import "../styles/HomeHeader.css"
import "../styles/Responsive.css"
import "../styles/animated.css"

const HomeHeader = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const location = useLocation()

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    setIsSticky(scrollTop > 200)
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user)
      if (user) {
        console.log("Logged in as:", user.email)
      } else {
        console.log("Not logged in")
      }
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      unsubscribe()
    }
  }, [handleScroll])

  const isActive = (path) => {
    if (path === "#home") {
      return (
        location.pathname === "/" &&
        (location.hash === "" || location.hash === path)
      )
    }
    return location.hash === path
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      console.log("Signing out...")
      // auth state listener will handle isLoggedIn state
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const toggleMenu = () => {
    setMenuActive(!menuActive)
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
                <img className="logo" src={logo} alt="Chain App Dev" />
              </Link>
              <ul className={`nav ${menuActive ? "active" : ""}`}>
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
                  </li>
                )}
                <li>
                  <div className="gradient-button">
                    {isLoggedIn ? (
                      <Link to="/" onClick={handleSignOut}>
                        התנתק
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className={isActive("/login") ? "active" : ""}
                      >
                        הצטרפו כאן
                      </Link>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
