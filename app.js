// Import
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const unsplash = require('./api/unsplash.api');
// const enforce = require('express-sslify');

// ----------------------------------------------------------------------------------------- //

// Setup
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
    const response = await unsplash.get('/search/photos', {
      params: { query: searchInput },
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
