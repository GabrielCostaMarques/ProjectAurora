import { useParams } from "react-router-dom"
import { useFetchItems } from "../hooks/useFetchQuery"

import styles from '../components/ProductsTable/ProductsTable.module.css';

const ProductSingle = () => {





    const { id } = useParams()
    const URL = " http://localhost:3000/products/" + id

    const { getRequest } = useFetchItems('productSingle', URL);
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
                            Array(1).fill().map((_, index) => (
                                <div key={index} className={`${styles.ItemProduct}`}>
                                    <div className={styles.SkeletonImage}></div>
                                    <div className={styles.BlockNamePrice}>
                                        <div className={styles.SkeletonText}></div>
                                        
                                    </div>
                                </div>
                            ))
                        ) : (
                            items && (
                                <div key={items.id} className={styles.ItemProduct}>
                                    <img src={items.image} alt={items.name}></img>
                                    <div className={styles.BlockNamePrice}>
                                        <h5>{items.name}</h5>
                                        <h4>R$ {items.price}</h4>
                                    </div>

                                </div>
                            )
                        )

                    }
            </div>
        </section>
    );
}

export default ProductSingle
