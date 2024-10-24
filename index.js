import { ecoStyle } from './ecoponto.js';
import { renderMap } from './render_map.js';

const express = require('express');
const cors = require('cors');

// Cria o aplicativo Express
const app = express();

// Habilita o CORS para todas as origens
app.use(cors());

// Sua chave da API do Google Maps (substitua pela sua chave)
const googleMapsApiKey = 'AIzaSyDR4Ip9MSggDk48By8HVn4ZrFf1PcrMij8'; // Coloque sua chave aqui!


// Rota para o mapa do ecoPonto
app.get('/ecoponto', (req, res) => {
  const html = renderMap(googleMapsApiKey, -23.5505, -46.6333, ecoStyle); // São Paulo
  res.send(html);
});

// Rota 2: /map2 - Mapa de Nova York
app.get('/map2', (req, res) => {
  const html = renderMap(googleMapsApiKey, 40.7128, -74.0060); // Nova York
  res.send(html);
});

// Qualquer outra rota -> 404
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// O servidor escuta na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
