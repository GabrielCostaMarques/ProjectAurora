import {useState,useEffect} from "react"



export const useFetch=(url)=>{
    const [data, setData]=useState(null)

    const [config,setConfig]=useState(null)
    const [method, setMethod]=useState(null)
    const [callFetch, setCallFecht]=useState(null)

    const [loading, setLoading]=useState(false)



    const httpConfig=(data,method)=>{
        if(method==="POST"){
            setConfig({
                method,
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(data)
            })
            setMethod(method)
        }
    }   


    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            const res=await fetch(url)
            const json = await res.json()
            setData(json)
            setLoading(false)
        }
        fetchData()
    },[url,callFetch])


    useEffect(()=>{
        const request= async()=>{
            if(method=="POST"){
                let fetchOptions=[url,config] // ver o porque do let 
                const res=await fetch(...fetchOptions);
                const json= await res.json()
                setCallFecht(json)
            }
        }   
        request()
    },[url,config,method])

    return{data,httpConfig,loading}
}