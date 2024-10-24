// Função para retornar o código HTML com o Google Maps embutido
export function renderMap(apiKey, lat, lng, mapStyle) {
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
                zoom: 12,
                styles: ${JSON.stringify(mapStyle)},
                mapTypeControl: false,
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