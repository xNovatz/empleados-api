const express = require('express');
const router = express.Router();
const Empleado = require('../models/Empleado');

// Crear un nuevo empleado
router.post('/', async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los empleados
router.get('/', async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
});

// Buscar empleados por nombre (ejemplo: /buscar?nombre=Juan)
router.get('/buscar', async (req, res) => {
  const nombre = req.query.nombre;
  try {
    const empleados = await Empleado.find({
      nombre: { $regex: nombre, $options: 'i' }
    });
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar un empleado
router.put('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar un empleado
router.delete('/:id', async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Empleado eliminado' });
});

module.exports = router;
