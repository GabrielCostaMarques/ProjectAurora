// useFetchItems.js
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

export function useFetchItems(key, endpoint) {
    const consumerKey = import.meta.env.VITE_CONSUMER_KEY;
    const consumerPassword = import.meta.env.VITE_CONSUMER_PASSWORD;

    // Configurar OAuth 1.0a
    const oauth = OAuth({
        consumer: { key: consumerKey, secret: consumerPassword },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
        },
    });

    // Gerar parâmetros de autenticação
    const requestData = {
        url: endpoint,
        method: 'GET',
    };

    // Autorizar a requisição sem tokens
    const authorization = oauth.authorize(requestData);

    const postData = {
        url: endpoint,
        method: 'POST',
    };
    const postAuthorization = oauth.authorize(postData);


    

    // GET request
    const getRequest = useQuery([key, 'get'], async () => {
        const response = await axios.get(endpoint, { headers: oauth.toHeader(authorization) });
        return response.data;
    });

    // POST request
    const postRequest = useMutation([key, 'post'], async (newData) => {
        const response = await axios.post(endpoint, newData, { headers: oauth.toHeader(postAuthorization) });
        return response.data;
    });

    return { getRequest, postRequest };
}
