import axios from 'axios'
import {useQuery} from 'react-query'


export function useFetchItems(url) {


    return useQuery(['products'], async () => {
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error("Falha ao carregar os produtos");
        }

        return response.data
    });
}
