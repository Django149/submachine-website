import React, { useContext, useState, useEffect, createContext } from "react"
import * as authService from "../services/authService"

const AuthContext = createContext({
  currentUser: null,
  signup: authService.signup,
  login: authService.login,
  logout: authService.logout,
  resetPassword: authService.resetPassword,
  signInWithGoogle: authService.signInWithGoogle,
})

export const useAuth = () => {
  return useContext(AuthContext)
}

/**
 * AuthProvider component to provide authentication context to its children.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {JSX.Element} The AuthProvider component.
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = authService.auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup: authService.signup,
    login: authService.login,
    logout: authService.logout,
    resetPassword: authService.resetPassword,
    signInWithGoogle: authService.signInWithGoogle,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
