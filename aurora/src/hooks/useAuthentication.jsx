import { app } from "../config/firebase"
import { useMutation, useQuery } from 'react-query'
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'


const auth = getAuth(app);

const createUser = async ({ email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

const signIn = async (data) => {
  const login = await signInWithEmailAndPassword(auth, data.email, data.password)
  return login.user
}


export const useCreateUser = () => {
  return useMutation(createUser);
};

export const logout = () => {
  signOut(auth)
}

export const useLogin = () => {
  return useQuery(signIn)
}

