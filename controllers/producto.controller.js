const Producto = require("../models/producto");

// Buscar todas las productos
const getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find()
        return res.status(200).json({
            ok: true,
            message: 'productos encontrados',
            productos: productos
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error al obtener productos'
        })
    }
}


// Crear un producto
const createProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'El nombre del producto ya existe' });
    } else {
      res.status(500).json({ message: 'Error al crear el producto', error });
    }
  }
}

// modificar una producto por el id
const updateProductoById = async (req, res) => {
    const { id } = req.params;
    const { productonombre,  productodescripcion, productoprecio, productocategoria, productostock } = req.body
    try {
        const updateDataById = {};
        if (productonombre) updateDataById.productonombre = productonombre;
        if (productodescripcion) updateDataById.productodescripcion = productodescripcion;
        if (productoprecio) updateDataById.productoprecio = productoprecio;
        if (productocategoria) updateDataById.productocategoria = productocategoria;
        if (productostock) updateDataById.productostock = productostock;
        const producto = await Producto.findByIdAndUpdate(id, updateDataById)
        if (!producto) return res.status(400).json({
            ok: false,
            message: 'No fue posible modificar producto, no fue encontrado o no se detecto modificaciones'
        })
        const updateproducto = await Producto.findById(id)
        return res.status(200).json({
            ok: true,
            message: 'producto actualizado',
            producto: updateproducto
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            message: 'No fue posible modificar producto, por favor contactar a soporte'
        })
    }
}

// eliminar una producto por el id
const deleteProductoById = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByIdAndDelete(id)
        if (!producto) return res.status(400).json({
            ok: false,
            message: 'No fue posible eliminar producto, no fue encontrado'
        })
        return res.status(200).json({
            ok: true,
            message: 'producto eliminado',
            producto: producto
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            message: 'No fue posible eliminar producto, por favor contactar a soporte'
        })
    }
}

module.exports = {
    getAllProductos,
    createProducto,
    updateProductoById,
   deleteProductoById
 }