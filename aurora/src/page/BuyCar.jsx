import { useFetchItems } from '../hooks/useFetchQuery';

const URL = "http://aurora.local/wp-json/wp/v2/posts/";

const BuyCar = () => {
  const { getRequest } = useFetchItems('testeWord', URL);
  const { data: items } = getRequest;

  console.log(items);

  return (
    <section>
      <div>
        <h1>CARRINHO</h1>
      </div>
    </section>
  );
}

export default BuyCar;
