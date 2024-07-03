const express = require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const cors = require('cors');

const app = express();
const port = 3000;

const api = new WooCommerceRestApi({
  url: import.meta.URL_ENDPOINT,
  consumerKey: import.meta.CONSUMER_KEY,
  consumerSecret: import.meta.CONSUMER_PASSWORD,
  version: "wc/v3"
});

app.use(cors());

app.get('/api/products', async (req, res) => {
  const responseData = {
    success: false,
    products: []
  };

  try {
    const { data } = await api.get('products', { per_page: 10 });
    responseData.success = true;
    responseData.products = data;
    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
