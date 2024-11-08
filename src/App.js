import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext" // Import the AuthProvider
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
  if (location.pathname === "/submachine-website") {
    return <HomeHeader />
  }

  if (location.pathname === "/submachine-website/dashboard") {
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
  return (
    <div dir="rtl">
      {" "}
      {/* Set RTL direction here */}
      <Router>
        <ScrollToTop>
          <AuthProvider>
            <ConditionalHeader />
            <ScrollToHash />
            <Routes>
              <Route path="/submachine-website" element={<Home />} />
              <Route path="/submachine-website/login" element={<Login />} />
              <Route path="/submachine-website/signup" element={<Signup />} />
              <Route
                path="/submachine-website/dashboard"
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
    </div>
  )
}

export default App
