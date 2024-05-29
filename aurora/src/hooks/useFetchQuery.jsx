import axios from 'axios'
import {useQuery,useMutation} from 'react-query'


export function useFetchItems(key,url) {


    const getRequest= useQuery([key,'get'], async () => {
        const response= await axios.get(url);
        return response.data
        
    });
    

    const postRequest = useMutation([key,'post'],async(newData)=>{
        const response = await axios.post(url,newData)
        return response.data
    })
    return {getRequest,postRequest}

 }