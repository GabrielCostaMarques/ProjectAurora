import styles from '../style/Header.module.css'



export default function Header(){
    // const themeChange=()=>{
    //     var toggle= document.getElementById("toggle");

    //     if (toggle.checked) {
    //         var bodyColor= document.getElementById('root');
    //         bodyColor.classList.add("darkMode")
    //     }
    // }
    // themeChange()
    return(
        <header>
                
            <div className={styles.headerContent}>
                <nav>
                    <a href="#overview">OVERVIEW</a>
                    <a href="#projetos">PROJETOS</a>

                    {/* <div className='' >
                        <input type="checkbox" name="toggleColor" id="toggle" />
                    </div> */}
                </nav>
            </div>
        </header>
    )
}