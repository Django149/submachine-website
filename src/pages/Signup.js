import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/images/submachine-logo-no-bg.png"
import "./Signup.css"
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
    }
  }

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle()
      navigate("/dashboard")
    } catch (error) {
      console.error("Error signing up with Google: ", error.message)
    }
  }

  return (
    <div className="bg-light py-5 signup-page d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="mb-4 text-center">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Submachine Logo"
                      className="mb-2"
                      style={{ height: "auto", width: "400px" }}
                    />
                  </Link>
                </div>
                <h4 className="text-center fs-2">צור חשבון חדש</h4>
                <div className="text-center mt-2">
                  <p>
                    כבר יש לך חשבון? <Link to="/login">התחבר</Link>
                  </p>
                </div>
                <form class="pt-4" onSubmit={handleSignup}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">אימייל</label>
                    <input
                      type="email"
                      class="form-control english-input mb-4"
                      id="exampleInputEmail1"
                      placeholder="you@example.com"
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">סיסמא</label>
                    <input
                      type="password"
                      class="form-control english-input"
                      id="exampleInputPassword1"
                      placeholder="*******"
                      aria-describedby="passwordHelp"
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }}
                    />
                  </div>
                  <small id="passwordHelp" class="form-text text-muted">
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
                  <button class="google-btn" onClick={handleGoogleSignup}>
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
