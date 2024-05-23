import { useState } from "react";
import styles from './NewLestter.module.css'


export default function NewLestter() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        alert(`Seu nome é ${name} e seu email é ${email}`)

        setEmail("")
        setName("")
    }

    return (
        <>

            <form onSubmit={handleSubmit} className={styles.bodyContainer}>
                <label htmlFor="name">
                    <input type="text" name="name" placeholder="Nome..." onChange={(e) => {setName(e.target.value)}} value={name} />
                </label>
                <label htmlFor="email">
                    <input type="email" name="name" placeholder="Email..." onChange={(e) => {setEmail(e.target.value)}} value={email} />
                </label>
                <label>
                    <button type="submit">Enviar</button>
                </label>

            </form>
        </>
    )
}