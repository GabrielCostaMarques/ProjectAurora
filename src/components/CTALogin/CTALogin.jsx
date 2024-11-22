import NewLestter from "../NewLestter/NewLestter"
import styles from "./CTALogin.module.css"


export default function CTALogin() {
    return (
        <section>
            <div className={styles.ImgParallax}>
                <div>
                    <h3>FAÇA SUA INSCRIÇÃO PARA RECEBER OFERTAS</h3>
                    <NewLestter/>
                </div>
            </div>

        </section>
    )
}