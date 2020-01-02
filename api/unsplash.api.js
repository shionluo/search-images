// Import
const axios = require('axios');
const dotenv = require('dotenv');

// ----------------------------------------------------------------------------------------- //

// Setup
if (process.env.NODE_ENV !== 'production') dotenv.config();

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_API}`,
  },
});

module.exports = unsplash;
