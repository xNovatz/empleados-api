require('dotenv').config(); // Carga el archivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const empleadosRoutes = require('./routes/empleados');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permite leer JSON en las solicitudes

// Ruta base para empleados
app.use('/api/empleados', empleadosRoutes);

// Conexión con MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión', err));

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
});
