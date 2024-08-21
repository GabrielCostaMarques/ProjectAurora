import { useState } from 'react';
import { app, db } from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseEmailException } from '../exceptions/exceptionLogin';



const useAuthentication = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (data) => {
    setLoading(true)
    try {
      const { user } = await createUserWithEmailAndPassword(auth,data.email,data.password)
      await updateProfile(user, {displayName: data.displayName});

      setSucess(true) 
      setLoading(false)
      setError(null)
      
      return user;
      
    } catch (error) {
      setSucess(false)
      const apiError = firebaseEmailException(error)
      setLoading(false)
      setError(apiError)
    }

  };



  const signIn = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      setError(null);
      const login = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return login.user;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  };

  return {
    createUser,
    signIn,
    logout,
    loading,
    error,
    sucess,
    auth
  };
};

export default useAuthentication;