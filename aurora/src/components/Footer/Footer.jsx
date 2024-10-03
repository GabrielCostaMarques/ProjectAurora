
import styles from './Footer.module.css'; // Importa o arquivo de estilos CSS
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer>
        <div className={styles.containerFooter}>
            <ul>
                <li><div className={styles.logoFooter}></div></li>
            </ul>
            <ul className={styles.centerFooterLinks}>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            <ul>
                <li className={styles.socialIcons}><FaInstagram size={20}/></li>
                <li className={styles.socialIcons}><FaXTwitter size={20}/></li>
                <li className={styles.socialIcons}><FaFacebookSquare size={20}/></li>
            </ul>
            </div>
            <div className={styles.halfBlock}></div>

        <div className={styles.containerFooter}>
            <ul>
                <p>© Copyright 2021 - Todos os direitos reservados</p>
            </ul>
            <ul>
                <li><a href="">Política de Privacidade</a></li>
                <li><a href="">Termos e Condições</a></li>
            </ul>

        </div>
    </footer>
  );
}

export default Footer;