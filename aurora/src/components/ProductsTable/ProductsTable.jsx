import styles from './ProductsTable.module.css'

import images from "../../assets/imges-export"

export default function ProductsTable() {


    return (

        <section className={styles.BodyProducts}>

            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            
            <div className={styles.TableMain}>
                <div className={styles.ItemProduct}>
                    <div >
                        <img src={images.image4}></img>
                        <div className={styles.BlockNamePrice}>
                            <h5>Bolsa preta</h5>
                            <h4>R$99,99</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.ItemProduct}>
                    <div >
                        <img src={images.image4}></img>
                        <div className={styles.BlockNamePrice}>
                            <h5>Bolsa preta</h5>
                            <h4>R$99,99</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.ItemProduct}>
                    <div >
                        <img src={images.image4}></img>
                        <div className={styles.BlockNamePrice}>
                            <h5>Bolsa preta</h5>
                            <h4>R$99,99</h4>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}