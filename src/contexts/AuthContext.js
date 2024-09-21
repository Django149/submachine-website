// src/contexts/AuthContext.js
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

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = authService.auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe // Cleanup subscription
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
