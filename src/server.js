// server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Ensure you have your API key stored in a .env file
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

app.use(express.json());

app.get('/maps', async (req, res) => {
    const { endpoint, params } = req.query;

    if (!endpoint) {
        return res.status(400).send('Endpoint is required');
    }

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/${endpoint}`, {
            params: { ...params, key: GOOGLE_MAPS_API_KEY },
        });
        res.send(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});
