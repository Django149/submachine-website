// src/services/realtimeDatabaseService.js
import { ref, get, set } from "firebase/database"
import { database } from "./firebase-config"

/**
 * Fetches user data from the real-time database.
 *
 * @param {string} userId - The user's UID.
 * @returns {Promise<Object|null>} The user data or null if not found.
 */
export const fetchUserData = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}`)
    const snapshot = await get(userRef)
    return snapshot.exists() ? snapshot.val() : null
  } catch (error) {
    console.error("Error fetching user data:", error)
    return null
  }
}

/**
 * Creates a new user entry in the real-time database with default values.
 *
 * @param {string} userId - The user's UID.
 * @returns {Promise<boolean>} True if successful, else false.
 */
export const createNewUser = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}`)
    await set(userRef, {
      planName: "basic",
      timeLeft: 15,
    })
    console.log(
      "User created in realtime database with default plan and time left"
    )
    return true
  } catch (error) {
    console.error("Error creating user in realtime database:", error)
    return false
  }
}
