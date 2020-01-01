// Import
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const axios = require('axios');
// const enforce = require('express-sslify');

// Setup
if (process.env.NODE_ENV !== 'production') dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Search API
app.post('/api', async (req, res) => {
  const { searchInput } = req.body;

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: searchInput },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API}`,
      },
    });

    res.status(200).send(response.data);
  } catch (error) {
    res.status(401).send({ error });
  }
});

// Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Service Worker
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

// Export
module.exports = app;
