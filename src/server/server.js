import fastify from 'fastify';
import axios from 'axios';
import cors from '@fastify/cors';

const data = fastify();

// Configuração do CORS
data.register(cors, {
    origin: 'http://localhost:5173', // Origem do seu app React
    methods: ['GET'],                // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],
});

const URL = "https://fakestoreapi.com/products";
const URLSearch = "https://fakestoreapi.com/products/category";

// Endpoint para buscar todos os produtos
data.get("/products", async (req, res) => {
    try {
        const response = await axios.get(URL);
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send({ error: "Erro ao buscar produtos." });
    }
});

// Endpoint para buscar produtos por categoria
data.get("/search", async (req, res) => {
    const { q } = req.query; // Pega o parâmetro de consulta `q`
    
    if (q) {
        try {
            const response = await axios.get(`${URLSearch}/${q}`);
            res.status(200).send(response.data);
        } catch (error) {
            res.status(500).send({ error: "Erro ao buscar categoria." });
        }
    } else {
        res.status(400).send({ error: "Parâmetro 'q' é obrigatório." });
    }
});

// Inicia o servidor na porta 3333
data.listen({ port: 3333 }, (err) => {
    if (err) {
        console.error(err);
    }
    console.log('Servidor rodando na porta 3333');
});
