import styles from './ProductsTable.module.css';
import { useFetchItems } from '../../hooks/useFetchQuery';

import IndividualProduct from '../IndividualProduct';

 const URL = "http://aurora.local/wp-json/wc/v3/products";

export default function ProductsTable() {
    const { getRequest } = useFetchItems('products',URL);

    const {isLoading, isError, data}=getRequest
        
    return (
        <section className={styles.BodyProducts}>
            <IndividualProduct data ={data} error={isError} loading={isLoading}/>
        </section>
    );
}
