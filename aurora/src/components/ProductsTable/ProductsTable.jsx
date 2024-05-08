import styles from './ProductsTable.module.css'

export default function ProductsTable({ name, price, image,oferta}) {
    return (

        <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.TableMain}>
                <div>
                    <img src={image}></img>
                    <div className={styles.BlockNamePrice}>
                        <h5>{name}</h5>
                        <h4>R$ {price}</h4>
                    </div>
                    {oferta && <p>Oferta Imperdível</p>}
                </div>
            </div>
        </section>
    )
}