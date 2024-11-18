const express = require('express')

// permitir comunicarnos con el frontend
const router = express.Router()
const {getAllProductos, createProducto, updateProductoById, deleteProductoById} = require('./../controllers/producto.controller')

//traer todas las productos
router.get('/productos', getAllProductos)

//nuevo producto
router.post('/productos', createProducto)

//modificar producto por el id
router.put('/productos/:id',  updateProductoById)

//Borrar producto por el id
router.delete('/productos/:id',  deleteProductoById)

module.exports = router
