import React, { useEffect, useState } from "react"
import "../styles/Preloader.css"

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for the window to load, then set loading to false
    window.onload = () => {
      setLoading(false)
    }
  }, [])

  return (
    loading && (
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  )
}

export default Preloader
