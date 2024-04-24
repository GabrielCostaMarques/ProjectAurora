import styles from './ProductsTable.module.css'
import images from "../../assets/imges-export"

export default function ProductsTable() {

    const products = [
        { name: "Bolsa Preta", price: 99.99, image: images.image4 },
        { name: "Bolsa Preta", price: 99.99, image: images.image4 },
        { name: "Bolsa Preta", price: 99.99, image: images.image4 },
        { name: "Bolsa Preta", price: 99.99, image: images.image4 },
    ]





    return (

        <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.TableMain}>
                {products.map((product, index) => (
                    <div key={index} className={styles.ItemProduct}>
                        <div>
                            <img src={product.image}></img>
                            <div className={styles.BlockNamePrice}>
                                <h5>{product.name}</h5>
                                <h4>R$ {product.price}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}