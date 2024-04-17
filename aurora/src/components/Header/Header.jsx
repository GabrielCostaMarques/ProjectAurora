import styles from './Header.module.css';
import Logo from '../../assets/logo-rgb.png';
//Importando a funcionalidade e os botões utilizando o React-icons
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';


export default function Header() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>

            <div className={styles.headerContent}>
                <div className={styles.boxLogo}>
                    <img className={styles.logo} src={Logo} alt="Logo Aurora" />
                </div>
                <nav ref={navRef}>
                    <a href="#overview">OVERVIEW</a>
                    <a href="#projetos">PROMOÇÕES</a>
                    <a href="#projetos">LUXO</a>
                    <a href="#projetos">CUSTO BENEFÍCIO</a>
                    {/* Botão hamburguer */}
                    <button id="btn" className="nav-btn nav-fecha-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button id="btn" className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>

        </header>
    )
}