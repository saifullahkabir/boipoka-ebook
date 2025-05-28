import { useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import axios from 'axios'
import { app } from '../firebase/firebase.config'
import { AuthContext } from './AuthContext';
import useAxiosPublic from '../hooks/useAxiosPublic';


// export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = async () => {
    setLoading(true);
    // const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {
    //   withCredentials: true,
    // })
    // console.log(data, 'cokkie delete');
    signOut(auth);
    setLoading(false);
    return;
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // Get token from server
  // const getToken = async email => {
  //   const { data } = await axios.post(
  //     `${import.meta.env.VITE_API_URL}/jwt`,
  //     { email },
  //     { withCredentials: true }
  //   )
  //   console.log(data, 'post token');
  //   return data;
  // }

  // save a user data
  const saveUser = async user => {
    const userData = {
      name: user?.name,
      email: user?.email,
      role: 'guest',
      status: 'Verified'
    }
    const { data } = await axiosPublic.put(`/user`, userData);
    console.log(data, 'save to db');
    return data;
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // setUser(currentUser);
      // if (currentUser) {
      //   getToken(currentUser.email || user?.email);
      //   saveUser(currentUser);
      // }
      // setLoading(false);

      // problem solve code
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        saveUser(currentUser);
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
          .then(res => {
            console.log('logged user:', res.data);
          })
      }
      else {
        axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          })
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}



export default AuthProvider;
