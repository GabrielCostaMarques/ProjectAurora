import { useState } from 'react';
import { app,db } from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseEmailException } from '../exceptions/exceptionLogin';


const useAuthentication = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(null);

const createUser = ({email, password}) => {
  setLoading(true);
  setError(null);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setLoading(false);
      setSucess(true)
      return userCredential.user;
    })
    .catch((error) => {
      console.log(error);
      const apiError=firebaseEmailException(error);
      setError(apiError);
      setSucess(false);
      setLoading(false);
    });
};


  const signIn = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return login.user;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
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
