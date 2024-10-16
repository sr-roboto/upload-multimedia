import { app } from './app.js';

// inicializamos el puerto
const PORT = process.env.PORT || 8080;

// ponemos en escucha el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
