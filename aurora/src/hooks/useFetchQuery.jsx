// useFetchItems.js
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';


export function useFetchItems(key, endpoint) {

      const getRequest = useQuery([key, 'get'], async () => {
          const response = await axios.get(endpoint);
          return response.data;
      });

    const postRequest = useMutation([key, 'post'], async (newData) => {
        const response = await axios.post(endpoint, newData);
        return response.data;
    });

    return { getRequest, postRequest };
}
