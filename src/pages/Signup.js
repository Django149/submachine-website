import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import logo from "../assets/images/submachine-logo-text-no-bg.png"
import "../styles/Signup.css"
import "../styles/Global.css"
import "../styles/Buttons.css"
import "../styles/Responsive.css"
import "../styles/animated.css"

/**
 * SignupForm component for user registration.
 *
 * @returns {JSX.Element} The rendered SignupForm component.
 */
const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      await signup(email, password)
      navigate("/dashboard")
    } catch (error) {
      console.error("Error signing up: ", error.message)
      // Optionally, display error to user
    }
  }

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle()
      navigate("/dashboard")
    } catch (error) {
      console.error("Error signing up with Google: ", error.message)
      // Optionally, display error to user
    }
  }

  return (
    <div className="py-5 signup-page d-flex align-items-center">
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
                <h4 className="text-center fs-1">צור חשבון חדש</h4>
                <div className="text-center mt-2">
                  <p>
                    כבר יש לך חשבון? <Link to="/login">התחבר</Link>
                  </p>
                </div>
                <form className="pt-4" onSubmit={handleSignup}>
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
                  <small id="passwordHelp" className="form-text text-muted">
                    הסיסמא שלכם צריכה להיות בת 6 תווים לפחות
                  </small>

                  <button className="btn btn-primary w-100 mt-3" type="submit">
                    תרשמו אותי
                  </button>
                </form>
                <div className="d-flex align-items-center mt-5 mb-5">
                  <div className="flex-grow-1 border-top border-secondary"></div>
                  <span className="mx-2 text-secondary">או</span>
                  <div className="flex-grow-1 border-top border-secondary"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="google-btn" onClick={handleGoogleSignup}>
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

export default SignupForm
