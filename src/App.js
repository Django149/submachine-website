import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import HomeHeader from "./components/HomeHeader"
import DashboardHeader from "./components/DashboardHeader"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import PrivateRoute from "./components/PrivateRoute"
import ScrollToTop from "./components/ScrollToTop"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  return null
}

function ConditionalHeader() {
  const location = useLocation()
  const path = location.pathname

  if (path === "/") {
    return <HomeHeader />
  }

  if (path === "/dashboard") {
    return <DashboardHeader />
  }

  return null
}

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // Define the base path for deployment; change only if deploying to a specific path
  const basename = process.env.PUBLIC_URL || "/submachine-website"

  return (
    <div dir="rtl">
      {" "}
      {/* Set RTL direction */}
      <Router basename={basename}>
        <ScrollToTop>
          <AuthProvider>
            <ConditionalHeader />
            <ScrollToHash />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </ScrollToTop>
      </Router>
      <Footer /> {/* Footer stays consistent across all routes */}
    </div>
  )
}

export default App
