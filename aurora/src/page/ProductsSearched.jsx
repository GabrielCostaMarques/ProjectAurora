import { useSearchParams } from "react-router-dom";
import { useFetchItems } from "../hooks/useFetchQuery";
import styles from '../components/ProductsTable/ProductsTable.module.css';
import { useEffect, useRef } from "react";
import IndividualProduct from "../components/IndividualProduct";

const ProductsSearched = () => {
  const [searchParams] = useSearchParams();
  
  // Define a URL com o parâmetro `q` para a categoria de busca
  const URL = `http://localhost:3333/search?q=${searchParams.get('q')}`;
  
  // Usa o hook `useFetchItems` para buscar dados com a URL atualizada
  const { getRequest } = useFetchItems('search', URL);
  const { isError, isLoading, data: items, refetch } = getRequest;
  
  const prevSearchParamsRef = useRef();

  useEffect(() => {
    if (prevSearchParamsRef.current !== searchParams.toString()) {
      prevSearchParamsRef.current = searchParams.toString();
      refetch(); // Refaz a requisição sempre que os parâmetros de busca mudam
    }
  }, [searchParams, refetch]);

  return (
    <section className={styles.BodyProducts}>
      <h2>CONHEÇA MAIS DE NOSSOS PRODUTOS</h2>
      <br />
      <br />
      <br />
      <IndividualProduct data={items} error={isError} loading={isLoading} />
    </section>
  );
};

export default ProductsSearched;
