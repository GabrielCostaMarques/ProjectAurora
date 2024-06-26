// useFetchItems.js
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/api', // Aponte para o seu backend
});

export function useFetchItems(key, endpoint) {
    const getRequest = useQuery([key, 'get'], async () => {
        const response = await client.get(endpoint);
        return response.data;
    });

    const postRequest = useMutation([key, 'post'], async (newData) => {
        const response = await client.post(endpoint, newData);
        return response.data;
    });

    return { getRequest, postRequest };
}
