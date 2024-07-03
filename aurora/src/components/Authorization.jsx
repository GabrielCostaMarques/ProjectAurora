import addOAuthInterceptor from 'axios-oauth-1.0a';
import axios from 'axios'

const Authorization = (useAuth) => {
    if (useAuth==false) {
        return axios.create()
    }



    const KEY = import.meta.env.VITE_CONSUMER_KEY;
    const PASSWORD = import.meta.env.VITE_CONSUMER_PASSWORD;

    if (!KEY || !PASSWORD) {
        throw new Error("As chaves do consumidor não estão definidas nas variáveis de ambiente");
    }
    const client = axios.create();


    const options = {
        algorithm: 'HMAC-SHA1',
        key: KEY,
        secret: PASSWORD,
    };

    addOAuthInterceptor(client, options);



    return client
}

export default Authorization
