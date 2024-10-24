// Estilos do mapa
export const ecoStyle = [
    {
      featureType: "all", // Afeta todos os elementos
      elementType: "labels.icon", // Remove ícones de locais convencionais
      stylers: [{ visibility: "off" }] // Desativa os ícones de locais
    },
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [
        { color: "#ff0000" }      // Ajusta a luminosidade
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { color: "#808080" }   // Cor personalizada das estradas (cinza)
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { color: "#b0b0b0" }   // Cor personalizada da água (cinza claro)
      ]
    },
  ];