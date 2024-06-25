import { useFetchItems } from '../hooks/useFetchQuery';

const URL = "http://aurora.local/wp-json/wp/v2/posts/";

const BuyCar = () => {
  const { getRequest } = useFetchItems('testeWord', URL);
  const { data: items } = getRequest;

  console.log(items);

  return (
    <section>
      {items && items.map((post) => (
        <div key={post.id}>
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
          <p>{post.date}</p>
        </div>
      ))}
    </section>
  );
}

export default BuyCar;
