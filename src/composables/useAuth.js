import { ref, onMounted, onUnmounted } from 'vue'
import { auth } from '../main'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export function useAuth() {
  const user = ref(null)
  const isAuthenticated = ref(false)

  let unsubscribe

  onMounted(() => {
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser
      isAuthenticated.value = !!currentUser
    })
  })

  onUnmounted(() => {
    if (unsubscribe) unsubscribe()
  })

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      return userCredential.user
    } catch (error) {
      throw error
    }
  }

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return userCredential.user
    } catch (error) {
      throw error
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      throw error
    }
  }

  return {
    user,
    isAuthenticated,
    register,
    signIn,
    signOut: signOutUser
  }
}
