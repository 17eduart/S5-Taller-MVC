import express from 'express';
import {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    modificarProducto,
    borrarProducto
}
    from '../controllers/productoController.js';

const router = express.Router();

// define the home page route
router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);
router.post('/', crearProducto);
router.put('/:id', modificarProducto);
router.delete("/:id", borrarProducto);

export default router;
