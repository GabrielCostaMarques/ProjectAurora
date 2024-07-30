import styles from './Header.module.css';

import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/authContext';

import { FaAlignJustify, FaTimes } from "react-icons/fa";







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

    const navRef=useRef()
    // const showNavbar=()=>{
    //     navRef.current.classList.toggle("responsive_nav")
    // }


    return (
        <header>
            {!user ? (
                <div className={`${styles.headerContent} ${scrolled ? styles.scrollDown : ""}`}>
                    <Link to={"/"}>
                        <div className={styles.boxLogo}></div>
                    </Link>

                    <nav ref={navRef}>
                        <span>OVERVIEW</span>
                        <span>PROMOÇÕES</span>
                        <span>LUXO</span>
                        <span>CUSTO BENEFÍCIO</span>
                    <div className={styles.toggleOpenMenu}><FaAlignJustify/></div>    
                    <div className={styles.toggleCloseMenu}><FaTimes /></div> 
                    </nav>

                    <form className={styles.searchContainer}>
                        <label>
                            <input className={styles.inputSearch} type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
                        </label>
                        <label>
                            <span onClick={handleSubmit} className={styles.iconSearch}></span>
                        </label>
                    </form>
                    <Link to={`/signIn`}>
                        <span className={styles.buttonLogin}>LOGIN</span>
                    </Link>

                    


                </div>
            ) : (
                <div className={`${styles.headerContent} ${scrolled ? styles.scrollDown : ""}`}>
                    <Link to={"/"}>
                        <div className={styles.boxLogo}></div>
                    </Link>

                    <nav ref={navRef}>
                        <span>OVERVIEW</span>
                        <span>PROMOÇÕES</span>
                        <span>LUXO</span>
                        <span>CUSTO BENEFÍCIO</span>
                            <div className={styles.toggleOpenMenu}><FaAlignJustify /></div> 
                            <div className={styles.toggleCloseMenu}><FaTimes/></div> 
                    </nav>
                    <form onSubmit={handleSubmit} className={styles.searchContainer}>
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
