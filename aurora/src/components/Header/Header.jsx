import styles from './Header.module.css';
import Logo from '../../assets/logo-rgb.png';



export default function Header() {
 
    console.log(document.getElementById("#overview"));
   
    return (
        <header>

            <div className={styles.headerContent}>
                <div className={styles.boxLogo}>
                    <img className={styles.logo} src={Logo} alt="Logo Aurora" />
                </div>
                <nav>
                    <a id="#overview">OVERVIEW</a>
                    <a href="#projetos">PROMOÇÕES</a>
                    <a href="#projetos">LUXO</a>
                    <a href="#projetos">CUSTO BENEFÍCIO</a>
                </nav>
            </div>
            <div className={styles.megaMenu}>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.
                </div>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.
                </div>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.
                </div>
            </div>


        </header>


    )
}