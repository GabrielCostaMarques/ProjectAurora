import styles from './ProductsTable.module.css'


export default function ProductsTable({ products }) {
    return (

        <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.TableMain}>
                {products.map((product, index) => {
                    return (
                        <div key={index} className={styles.ItemProduct}>
                            <img src={product.image}></img>
                            <div className={styles.BlockNamePrice}>
                                <h5>{product.name}</h5>
                                <h4>R$ {product.price}</h4>
                            </div>
                            {product.oferta && <p>Oferta Imperdível</p>}
                        </div>
                    );
                })}

            </div>
        </section>
    )
}