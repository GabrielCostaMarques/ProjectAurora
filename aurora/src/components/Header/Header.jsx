import styles from './Header.module.css';
import Logo from '../../assets/logo-rgb.png';
import images from '../../assets/imges-export';


export default function Header() {

    return (
        <header>

            <div className={styles.headerContent}>
                <div className={styles.boxLogo}>
                    <img className={styles.logo} src={Logo} alt="Logo Aurora"/>
                </div>
                <nav>
                    <a href="#overview">OVERVIEW</a>
                    <a href="#projetos">PROMOÇÕES</a>
                    <a href="#projetos">LUXO</a>
                    <a href="#projetos">CUSTO BENEFÍCIO</a>
                </nav>
                <img className={styles.buyCar} src={images.buyCar} alt="carrinho"/>
                
            </div>
            <div className={styles.dropDownMenu}>
                <div className={styles.contentMegaMenu}>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia!</li>
                    </ul>
                </div>
            </div>

            

        </header>
    )
}