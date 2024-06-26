import { useFetchItems } from '../hooks/useFetchQuery';

const Products = () => {
  const { getRequest } = useFetchItems('products', '/products');

  if (getRequest.isLoading) return <div>Loading...</div>;
  if (getRequest.isError) return <div>Error: {getRequest.error.message}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {getRequest.data.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;