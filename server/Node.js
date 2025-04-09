const express = require('express');
const cors = require('cors');
const app = express();

let favorites = [];

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