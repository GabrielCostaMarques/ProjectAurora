import { useQuery } from 'react-query';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export function useFetchProducts(key, endpoint) {
    const api = new WooCommerceRestApi({
        url: import.meta.env.VITE_URL_ENDPOINT,
        consumerKey: import.meta.env.VITE_CONSUMER_KEY,
        consumerSecret: import.meta.env.VITE_CONSUMER_SECRET,
        version: "wc/v3",

    });

    const fetchProducts = async () => {
        const response = await api.get(endpoint);
        return response.data;
    };

    const getRequestProducts = useQuery([key, endpoint], fetchProducts);

    return { getRequestProducts };
}
