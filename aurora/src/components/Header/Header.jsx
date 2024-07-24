import styles from './Header.module.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/authContext';







export default function Header() {

    const { user } = useAuthValue()

    const [scrolled, setScrolled] = useState(false)

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/search?q=" + search)
        setSearch("")
    }

    const handleScroll = () => {
        if (window.scrollY > 130) {
            setScrolled(true)


        } else {
            setScrolled(false)
        }
    }
    window.addEventListener("scroll", handleScroll)


    return (
        <header>
            {!user ? (
                <div className={`${styles.headerContent} ${scrolled ? styles.scrollDown : ""}`}>
                    <Link to={"/"}>
                        <div className={styles.boxLogo}></div>
                    </Link>

                    <nav>
                        <a href="#overview">OVERVIEW</a>
                        <a href="#projetos">PROMOÇÕES</a>
                        <a href="#projetos">LUXO</a>
                        <a href="#projetos">CUSTO BENEFÍCIO</a>
                    </nav>

                    <form className={styles.formsContainer}>
                        <label>
                            <input className={styles.inputSearch} type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
                        </label>
                        <label>
                            <span onClick={handleSubmit} className={styles.iconSearch}></span>
                        </label>
                    </form>
                    <Link to={`/signUp`}>
                        <span className={styles.buttonLogin}>LOGIN</span>
                    </Link>


                </div>
            ) : (
                <div className={`${styles.headerContent} ${scrolled ? styles.scrollDown : ""}`}>
                    <Link to={"/"}>
                        <div className={styles.boxLogo}></div>
                    </Link>

                    <nav>
                       <a href="#overview">OVERVIEW</a>
                        
                        <a href="#projetos">PROMOÇÕES</a>
                        <a href="#projetos">LUXO</a>
                        <a href="#projetos">CUSTO BENEFÍCIO</a>
                    </nav>
                    <form onSubmit={handleSubmit} className={styles.formsContainer}>
                        <label>
                            <input className={styles.inputSearch} type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
                        </label>
                        <label>
                            <span onClick={handleSubmit} className={styles.iconSearch}></span>
                        </label>
                    </form>
                    <Link to={"/carrinho"}>
                        <div className={styles.buyCar}></div>
                    </Link>




                </div>
            )}
        </header>

    )
}
