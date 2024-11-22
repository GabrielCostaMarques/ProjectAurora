import { useParams } from "react-router-dom"
import { useFetchItems } from "../../hooks/useFetchQuery"

import styles from './ProductDetails.module.css'

import Loader from "../../components/Loader/Loader";
const ProductSingle = () => {

    const { id } = useParams()
    const URL = " https://fakestoreapi.com/products/" + id

    const { getRequest } = useFetchItems('productDetails', URL);
    const { isLoading, isError, data: items } = getRequest




    return (
        <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br />
            <br />
            <br />
            <div className={styles.TableMain}>
                {isError ? (
                    <h2>Algo de errado aconteceu</h2>
                ) :


                    isLoading ? (
                        <Loader />
                    ) : (
                        items && (
                            <>
                            <div className={styles.caminhoPage}>
                                <p>caminho segue</p>
                            </div>
                            <sectionc className={styles.container}>
                                <div className={styles.slideDetailsProduct}>
                    
                                </div>
                                <div className={styles.details}>
                                    <h1>{items.title}</h1>
                                    <h3>{items.price}</h3>
                                    <h5>Descrição: </h5>
                                    <p>{items.description}</p>
                                    <div className={styles.boxCores}></div>
                                    <div className={styles.btnAddCart}>
                                        <button>Add to Cart</button>
                                        <span>Favoritar</span>
                                    </div>
                                </div>
                                
                            </sectionc>
                        </>
                        )
                    )

                }
            </div>
        </section>
    );
}

export default ProductSingle
