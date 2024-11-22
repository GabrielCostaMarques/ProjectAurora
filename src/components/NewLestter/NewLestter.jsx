import { useState } from "react";
import styles from './NewLestter.module.css'
import useFetchDocuments from "../../hooks/useFetchDocuments";

export default function NewLestter() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const {newUserEmail,loading}=useFetchDocuments()

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData={name,email}
        newUserEmail(userData,"users")
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
                    {!loading?(<button type="submit">Enviar</button>):(<button type="submit" disabled>Carregando...</button>) }
                </label>
                <label>
                    
                </label>

            </form>
        </>
    )
}