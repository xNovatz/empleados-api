const mongoose = require('mongoose');

// Definir cómo es un empleado
const empleadoSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  puesto: String,
  salario: Number,
  fechaIngreso: Date
});

// Crear índices para consultas más rápidas
empleadoSchema.index({ nombre: 1 });
empleadoSchema.index({ puesto: 1 });

module.exports = mongoose.model('Empleado', empleadoSchema);
