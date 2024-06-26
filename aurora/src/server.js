// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const addOAuthInterceptor = require('axios-oauth-1.0a');

dotenv.config();

const app = express();
const port = import.meta.env.PORT || 3000;

const KEY = import.meta.env.VITE_CONSUMER_KEY;
const PASSWORD = import.meta.env.VITE_CONSUMER_PASSWORD;

const client = axios.create();

const options = {
  algorithm: 'HMAC-SHA1',
  key: KEY,
  secret: PASSWORD,
};

addOAuthInterceptor(client, options);

app.get('/api/products', async (req, res) => {
  try {
    const response = await client.get('http://aurora.local/wp-json/wc/v3/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
