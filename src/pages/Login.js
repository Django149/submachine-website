import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import logo from "../assets/images/submachine-logo-text-no-bg.png"
import "../styles/Login.css"
import "../styles/Global.css"
import "../styles/Buttons.css"
import "../styles/Responsive.css"
import "../styles/animated.css"

/**
 * LoginForm component for user authentication.
 *
 * @returns {JSX.Element} The rendered LoginForm component.
 */
const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (error) {
      console.error("Error logging in: ", error.message)
      // Optionally, display error to user
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      navigate("/dashboard")
    } catch (error) {
      console.error("Error signing in with Google: ", error.message)
      // Optionally, display error to user
    }
  }

  return (
    <div className="py-5 login-page d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card-bg shadow-sm">
              <div className="card-body p-4">
                <div className="mb-4 d-flex justify-content-center">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Submachine Logo"
                      className="mb-2"
                      style={{ width: "150px" }}
                    />
                  </Link>
                </div>
                <h4 className="text-center fs-1">התחבר לחשבון שלך</h4>
                <div className="text-center mt-2">
                  <p>
                    אין לך חשבון? <Link to="/signup">צור חשבון חדש</Link>
                  </p>
                </div>
                <form className="pt-4" onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">אימייל</label>
                    <input
                      type="email"
                      className="form-control english-input mb-4"
                      id="exampleInputEmail1"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">סיסמא</label>
                    <input
                      type="password"
                      className="form-control english-input"
                      id="exampleInputPassword1"
                      placeholder="*******"
                      aria-describedby="passwordHelp"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <Link to="/forgot-password">שכחתם את הסיסמא?</Link>
                  </div>
                  <button className="btn btn-primary w-100 mt-3" type="submit">
                    התחבר
                  </button>
                </form>

                <div className="d-flex align-items-center mt-5 mb-5">
                  <div className="flex-grow-1 border-top border-secondary"></div>
                  <span className="mx-2 text-secondary">או</span>
                  <div className="flex-grow-1 border-top border-secondary"></div>
                </div>

                <div className="d-flex justify-content-center">
                  <button className="google-btn" onClick={handleGoogleLogin}>
                    <img
                      src="https://img.icons8.com/color/48/000000/google-logo.png"
                      alt="Google Logo"
                    />
                    <span>Continue with Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
