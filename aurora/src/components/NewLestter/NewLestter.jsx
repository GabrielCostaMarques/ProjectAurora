import { useState } from "react";
import styles from './NewLestter.module.css'
import { useFetchItems } from "../../hooks/useFetchQuery";

const URL="http://localhost:3000/users"

export default function NewLestter() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const {postRequest}=useFetchItems('users',URL)

    const {isLoading}=postRequest

    const handleSubmit = (event) => {
        event.preventDefault()

        const userData={
            name,email
        }
        postRequest.mutate(userData)
        setEmail("")
        setName("")
        
    }

    return (
        <>

            <form onSubmit={handleSubmit} className={styles.bodyContainer}>
                <label htmlFor="name">
                    <input type="text" name="name" placeholder="Nome..." onChange={(e) => {setName(e.target.value)}} value={name} required />
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" placeholder="Email..." onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                </label>
                <label >
                    {!isLoading?(<button type="submit">Enviar</button>):(<button type="submit" disabled>Carregando...</button>) }
                </label>
                <label>
                    
                </label>

            </form>
        </>
    )
}