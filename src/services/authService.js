// src/services/authService.js
import { auth, googleProvider } from "./firebase-config"
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
} from "firebase/auth"
import { createNewUser } from "./realtimeDatabaseService"

export { auth }

/**
 * Signs in a user with Google.
 *
 * @returns {Promise<Object>} The authenticated user.
 */
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

/**
 * Signs up a user with email and password.
 *
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise<Object>} The authenticated user.
 */
export const signup = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await createNewUser(result.user.uid)
    return result.user
  } catch (error) {
    console.error("Signup Error: ", error)
    throw error
  }
}

/**
 * Logs in a user with email and password.
 *
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise<Object>} The authenticated user.
 */
export const login = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result.user
  } catch (error) {
    console.error("Login Error: ", error)
    throw error
  }
}

/**
 * Logs out the current user.
 *
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    console.error("Logout Error: ", error)
    throw error
  }
}

/**
 * Sends a password reset email to the specified email address.
 *
 * @param {string} email - User's email.
 * @returns {Promise<void>}
 */
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    console.error("Password Reset Error: ", error)
    throw error
  }
}
