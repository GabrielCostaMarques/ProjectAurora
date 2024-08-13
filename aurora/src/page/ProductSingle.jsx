import { useParams } from "react-router-dom"
import { useFetchItems } from "../hooks/useFetchQuery"

import styles from '../components/ProductsTable/ProductsTable.module.css';

import Loader from "../components/Loader/Loader";
const ProductSingle = () => {




    const { id } = useParams()
    const URL = " https://fakestoreapi.com/products/" + id

    const { getRequest } = useFetchItems('productSingle', URL);
    const { isLoading, isError, data: items } = getRequest
    console.log(isLoading);

    
    
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
                            <Loader/>
                        ) : (
                            items && (
                                <div key={items.id} className={styles.ItemProduct}>
                                <span>{items.category}</span>
                                <img src={items.image} alt={items.title}></img>
                                <div className={styles.BlockNamePrice}>
                                    <h5>{items.title}</h5>
                                    <h4>R$ {items.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                    
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
