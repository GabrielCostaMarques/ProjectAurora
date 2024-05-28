import styles from './ProductsTable.module.css'
import { useQuery } from 'react-query';
import axios from 'axios'



export default function ProductsTable() {

    const {data,isLoading}=useQuery("products",()=>{
        return axios.get("http://localhost:3000/products")
        .then(response=>response.data)
    })

    if (isLoading) {
        return <p>Carregando...</p>
    }

    return (

        <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.TableMain}>
                {data.map((product, index) => {
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