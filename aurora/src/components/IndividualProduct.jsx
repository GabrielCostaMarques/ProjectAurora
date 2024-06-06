import PropTypes from 'prop-types';
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
                            <span>{product.oferta}</span>
                            <img src={product.image} alt={product.name}></img>
                            <div className={styles.BlockNamePrice}>
                                <h5>{product.name}</h5>
                                <h4>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                            </div>
                            {product.oferta && <Link to={`/products/${product.id}`}><button>Ver Detalhes</button></Link>}
                        </div>
                    ))
                )
                
                }
            </div>
    </section>
  )
}
IndividualProduct.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      oferta: PropTypes.string,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })),
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  };

export default IndividualProduct
