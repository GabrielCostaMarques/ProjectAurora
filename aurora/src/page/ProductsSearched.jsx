
import { useSearchParams } from "react-router-dom"
import { useFetchItems } from "../hooks/useFetchQuery"
import styles from '../components/ProductsTable/ProductsTable.module.css';
import {  useEffect, useRef } from "react";
import IndividualProduct from "../components/IndividualProduct";




const ProductsSearched = () => {
    const [searchParams]=useSearchParams()
    
    const URL = `http://aurora.local/wp-json/wc/v3/products?${searchParams}`

    const {getRequest}=useFetchItems('search',URL)
    const {isError,isLoading,data:items,refetch, }=getRequest

    const prevSearchParamsRef = useRef();

    useEffect(() => {
        if (prevSearchParamsRef.current !== searchParams.toString()) {
            prevSearchParamsRef.current = searchParams.toString();
            refetch();
        }
    }, [searchParams, refetch]);

  return (
    <section className={styles.BodyProducts}>
            <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
            <br />
            <br />
            <br />
            <IndividualProduct data={items} error={isError} loading={isLoading}/>
        </section>
  )
}

export default ProductsSearched