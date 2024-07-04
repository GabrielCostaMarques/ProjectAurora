import styles from './ProductsTable.module.css';
import { useFetchProducts } from '../../hooks/useFetchWoocomerce';
import IndividualProduct from '../IndividualProduct';

const URL = "products";
export default function ProductsTable() {
    const { getRequestProducts } = useFetchProducts('products', URL);

    const { isLoading, isError, data } = getRequestProducts


    return (
        <section className={styles.BodyProducts}>
            <IndividualProduct data={data} error={isError} loading={isLoading} />
        </section>
    );
}
