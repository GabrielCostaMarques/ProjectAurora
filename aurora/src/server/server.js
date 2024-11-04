import fastify from 'fastify'
import axios from 'axios'

import cors from '@fastify/cors'
const data = fastify()

data.register(cors, {
    origin: 'http://localhost:5173', // Origem do seu app React
    methods: ['GET'],                // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],
})

console.log(data)

const URL = "https://fakestoreapi.com/products"
const URLSearch="https://fakestoreapi.com/products/category"

data.get("/products", async (req, res) => {
    const response = await axios.get(URL)
    res.status(200).send(response.data)
})
data.get("/search", async (req, res) => {
    const response = await axios.get(URLSearch)
    res.status(200).send(response.data)
})

data.listen({
    port: 3333,
})