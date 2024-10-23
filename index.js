const express = require('express');
const cors = require('cors');

// Cria o aplicativo Express
const app = express();

// Habilita o CORS para todas as origens
app.use(cors());

// Função para retornar o código HTML com o Google Maps embutido
function renderMap(apiKey, lat, lng) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Google Maps</title>
        <script src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap" async defer></script>
        <style>
          #map {
            height: 100vh;
            width: 100vw;
          }
        </style>
    </head>
    <body id="map">
        <script>
          function initMap() {
            let location = { lat: ${lat}, lng: ${lng} };
            let map = new google.maps.Map(document.getElementById('map'), {
              center: location,
              zoom: 12
            });
            let marker = new google.maps.Marker({
              position: location,
              map: map
            });
          }
        </script>
    </body>
    </html>
  `;
}

// Sua chave da API do Google Maps (substitua pela sua chave)
const googleMapsApiKey = 'SUA_CHAVE_API_GOOGLE_MAPS'; // Coloque sua chave aqui!

// Rota 1: /map1 - Mapa de São Paulo
app.get('/map1', (req, res) => {
  const html = renderMap(googleMapsApiKey, -23.5505, -46.6333); // São Paulo
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
