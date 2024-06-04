
import { useSearchParams,Link } from "react-router-dom"
import { useFetchItems } from "../hooks/useFetchQuery"
import styles from '../components/ProductsTable/ProductsTable.module.css';




const ProductsSearched = () => {
    const [searchParams]=useSearchParams()
    console.log(searchParams);
    
    const URL = `http://localhost:3000/products?${searchParams}`
    console.log(URL);

    const {getRequest}=useFetchItems('search',URL)
    const {isError,isLoading,data:items}=getRequest
    console.log(items);

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
                    items.map((product) => (
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

export default ProductsSearched