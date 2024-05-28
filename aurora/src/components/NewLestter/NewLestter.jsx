import { useState } from "react";
import styles from './NewLestter.module.css'

import { useFetch } from "../../hooks/useFetch";

const URL = "http://localhost:3000/users";

export default function NewLestter() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const {data,loading,httpConfig}=useFetch(URL)

    console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Seu nome é ${name} e seu email é ${email}`)

        const user={
            name,
            email
        }

        httpConfig(user,"POST")


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
                    <input type="email" name="name" placeholder="Email..." onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
                </label>
                <label >
                    {loading && <p>Carregando Dados...</p>}
                </label>
                <label>
                    <button type="submit">Enviar</button>
                </label>

            </form>
        </>
    )
}