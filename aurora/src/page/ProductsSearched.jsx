
import { useSearchParams } from "react-router-dom"
import { useFetchItems } from "../hooks/useFetchQuery"
import styles from '../components/ProductsTable/ProductsTable.module.css';
import { useEffect, useRef } from "react";
import IndividualProduct from "../components/IndividualProduct";




const ProductsSearched = () => {
  const [searchParams] = useSearchParams()

  const URL = `http://localhost:3333/search?${searchParams}`

  const { getRequest } = useFetchItems('search', URL)
  const { isError, isLoading, data: items, refetch } = getRequest

  const prevSearchParamsRef = useRef();


  useEffect(() => {
    if (prevSearchParamsRef.current !== searchParams.toString()) {
      prevSearchParamsRef.current = searchParams.toString();
      refetch();

      console.log(prevSearchParamsRef)
      console.log(searchParams.toString())
      console.log(searchParams)
    }
  }, [searchParams, refetch]);

  console.log(items);

  return (
    <section className={styles.BodyProducts}>
      <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
      <br />
      <br />
      <br />
      <IndividualProduct data={items} error={isError} loading={isLoading} />
    </section>
  )
}

export default ProductsSearched