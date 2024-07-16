import {app,db} from "../config/firebase"
import { useMutation } from '@tanstack/react-query'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,updateProfile} from 'firebase/auth'





export const useAuthentication=()=>{
    const auth = getAuth(app)

    const {user}=useMutation({
        mutationKey:['userAuthPost'],
        mutationFn: async (data)=>{
           await createUserWithEmailAndPassword(auth,data.email,data.password);
           await updateProfile(user,{
            displayName:data.displayName
           })
        }
    })
    const {user}=useMutation({
        mutationKey:['userAuthPost'],
        mutationFn:async (data)=>{
           await createUserWithEmailAndPassword(auth,data.email,data.password);
           await updateProfile(user,{
            displayName:data.displayName
           })
        }
    })



}