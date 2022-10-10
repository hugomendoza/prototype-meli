const express = require("express");
require("dotenv").config();

// console.log( process.env )

//Crear de servidor de Express
const app = express();

//Directorio Público
app.use( express.static("public") );

//Rutas
//EndPoint Search
app.use("/api/items", require("./routes/apiSearch"));
app.use("/api/items/:id", require("./routes/apiProduct"));

//Escuchar peticiones
app.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});