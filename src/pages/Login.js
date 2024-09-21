import React, { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext" // Import the context
import logo from "../assets/images/submachine-logo-no-bg.png" // Ensure path is correct
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css" // Ensure path is correct

/**
 * LoginForm component for user login.
 *
 * @returns {JSX.Element} The rendered LoginForm component.
 */
const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const context = useAuth()
  const { login, signInWithGoogle } = context
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (error) {
      console.error("Error logging in: ", error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      navigate("/dashboard")
    } catch (error) {
      console.error("Error signing in with Google: ", error.message)
    }
  }

  return (
    <div className="bg-light py-5 login-page d-flex align-items-center">
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
                <h4 className="text-center fs-2">התחבר לחשבון שלך</h4>
                <div className="text-center mt-2">
                  <p>
                    אין לך חשבון? <Link to="/signup">צור חשבון חדש</Link>
                  </p>
                </div>
                <form class="pt-4" onSubmit={handleLogin}>
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
                  <div className="mt-2">
                    <Link to="/forgot-password">שכחתם את הסיסמא?</Link>
                  </div>
                  <button className="btn btn-primary w-100 mt-3" type="submit">
                    תחברו אותי
                  </button>
                </form>

                <div className="d-flex align-items-center mt-5 mb-5">
                  <div className="flex-grow-1 border-top border-secondary"></div>
                  <span className="mx-2 text-secondary">או</span>
                  <div className="flex-grow-1 border-top border-secondary"></div>
                </div>

                <div className="d-flex justify-content-center">
                  <button class="google-btn" onClick={handleGoogleLogin}>
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
