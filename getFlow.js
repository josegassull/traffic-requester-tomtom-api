const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.TOM_TOM_API_KEY;

// Verificar si la clave de API se está cargando correctamente
if (!apiKey) {
  console.error(
    "Error: TOM_TOM_API_KEY no está definida. Verifica el archivo .env"
  );
  process.exit(1);
}

// Definir los parámetros de la solicitud
const url = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/
22/json?key=${apiKey}&point=-32.894177,-68.844778
&unit=kmph&thickness=10`;

async function getTrafficData() {
  try {
    const response = await axios.get(url);

    // Imprimir la respuesta completa para verificar su estructura
    console.log("Respuesta de TomTom:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(
      "Error fetching traffic data:",
      error.response ? error.response.data : error.message
    );
  }
}
// Llamar a la función
getTrafficData();
