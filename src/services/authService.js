// src/services/authService.js
import { auth, googleProvider } from "./firebase-config"
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth"
import { createNewUser } from "./realtimeDatabaseService"

export { auth } // Add this line to export the auth object

// Function for signing in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    return user
  } catch (error) {
    console.error("Google Auth Error: ", error)
    throw error
  }
}

// Function to sign up with email and password
export const signup = async (email, password) => {
  try {
    console.log("creating account: email: " + email + "password:" + password)
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await createNewUser(result.user.uid)
    return result.user
  } catch (error) {
    console.error("Signup Error: ", error)
    throw error
  }
}

// Function to sign in with email and password
export const login = async (email, password) => {
  try {
    console.log(
      "logging in to account: email: " + email + "password:" + password
    )
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result.user
  } catch (error) {
    console.error("Login Error: ", error)
    throw error
  }
}

// Function to sign out
export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Logout Error: ", error)
    throw error
  }
}

// Function to send password reset email
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    console.error("Password Reset Error: ", error)
    throw error
  }
}
