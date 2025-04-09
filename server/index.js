

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();

let favorites = [];

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(cors());
app.use(express.json());

app.get('/api/favorites', (req, res) => {
  res.json(favorites);
});

app.post('/api/favorites', (req, res) => {
  const { city } = req.body;
  if (city && !favorites.includes(city)) {
    favorites.push(city);
  }
  res.sendStatus(200);
});

app.delete('/api/favorites/:city', (req, res) => {
  const { city } = req.params;
  favorites = favorites.filter((c) => c.toLowerCase() !== city.toLowerCase());
  res.sendStatus(200);
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));

app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
  
    try {
      const result = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          units: 'metric',
          appid: OPENWEATHER_API_KEY,
        },
      });
  
      res.json(result.data);
    } catch (error) {
      console.error('Error fetching weather:', error.response?.data || error.message);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  });