import { ref, get, set } from "firebase/database"
import { database } from "./firebase-config"

export const fetchUserData = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}`)
    const snapshot = await get(userRef)
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return null
    }
  } catch (error) {
    console.error("Error fetching user data:", error)
    return null
  }
}

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
