import styles from './ProductsTable.module.css';
import { useFetchItems } from '../../hooks/useFetchQuery';

const URL = "http://localhost:3000/products";

export default function ProductsTable() {
    const { data, isLoading, isError } = useFetchItems(URL);
    
    
    

    return (
        <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br />
            <br />
            <br />
            <div className={styles.TableMain}>
                {isError?(
                    <h2>Algo de errado aconteceu</h2>
                ):
                
                
                isLoading ? (
                    Array(3).fill().map((_, index) => (
                        <div key={index} className={`${styles.ItemProduct}`}>
                            <div className={styles.SkeletonImage}></div>
                            <div className={styles.BlockNamePrice}>
                                <div className={styles.SkeletonText}></div>
                                {/* <div className={`skeleton skeleton-text short`}></div> */}
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <div key={index} className={styles.ItemProduct}>
                            <img src={product.image} alt={product.name}></img>
                            <div className={styles.BlockNamePrice}>
                                <h5>{product.name}</h5>
                                <h4>R$ {product.price}</h4>
                            </div>
                            {product.oferta && <p>Oferta Imperdível</p>}
                        </div>
                    ))
                )
                
                }
            </div>
        </section>
    );
}
