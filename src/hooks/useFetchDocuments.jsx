import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useState } from 'react';

const useFetchDocuments = () => {

    const [loading,setLoading]=useState(null)

    // Define a coleção primeiro
    
    const newUserEmail = async (data,table) => {
        const myCollection = collection(db, table);
        try {
            setLoading(true)
            const userEmail = { data };
            await addDoc(myCollection, userEmail);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message);
            
        }
    };
    
    return { newUserEmail, loading };
};

export default useFetchDocuments;
