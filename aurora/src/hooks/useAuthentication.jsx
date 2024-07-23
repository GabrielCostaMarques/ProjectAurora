import { app, db } from "../config/firebase"
import { useMutation } from 'react-query'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'




const auth = getAuth(app)

const createUser =async (data)=>{
        const  userCredential = await createUserWithEmailAndPassword(auth,data.email,data.password)
        return userCredential.user
    }
    

    export const useCreateUser = () => {
        return useMutation(createUser);
      };
