const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  productonombre: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
    unique: true,
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres']
  },
  productodescripcion: {
    type: String,
    maxlength: [500, 'La descripción no puede exceder los 500 caracteres']
  },
  productoprecio: {
    type: Number,
    min: [0, 'El precio no puede ser negativo'],
    default: 0
  },
  productocategoria: {
    type: String,
    enum: ['Electrónica', 'Ropa', 'Hogar', 'Libros', 'Otros'],
    required: [true, 'La categoría es obligatoria'],
    default: 'Hogar'
  },
  productostock: {
    type: Number,
    min: [0, 'El stock no puede ser negativo'],
    default: 0
  },
  productofechaCreacion: {
    type: Date,
    default: Date.now
  },
  productofechaActualizacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Producto', productoSchema, 'Producto');
