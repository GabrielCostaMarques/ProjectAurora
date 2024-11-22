import styles from './ProductsTable/ProductsTable.module.css';
import { Link } from 'react-router-dom';
const IndividualProduct = ({data, error,loading}) => {

  return (
    <section>
      <div className={styles.TableMain}>
                {error?(
                    <h2>Algo de errado aconteceu</h2>
                    
                ):
                
                
                loading ? (
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
                    data.map((product) => (
                        <div key={product.id} className={styles.ItemProduct}>
                            <span>{product.category}</span>
                            <img src={product.image} alt={product.title}></img>
                            <div className={styles.BlockNamePrice}>
                                <h5>{product.title}</h5>
                                <h4>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                
                            </div>
                            {product.category && <Link to={`/products/${product.id}`}><button>Ver Detalhes</button></Link>}
                        </div>
                    ))
                )
                
                }
            </div>
    </section>
  )
}


export default IndividualProduct
