const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

console.log("GOOGLE_MAPS_API_KEY:", process.env.GOOGLE_MAPS_API_KEY);

const app = express();
const port = process.env.PORT || 3000;

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/maps", async (req, res) => {
  const { endpoint, ...params } = req.query;

  if (!endpoint) {
    return res.status(400).send("Endpoint is required");
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/${endpoint}`,
      {
        params: { ...params, key: GOOGLE_MAPS_API_KEY },
      }
    );
    res.send(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .send(error.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
