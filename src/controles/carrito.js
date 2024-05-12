import Carrito from "../modulos/carrito.js"
import bcryptjs from "bcryptjs";
const httpCarrito = {
    listarCarritoId: async (req, res) => {
        try {
            const { id } = req.params
            const result = await Carrito.listarCarritoId(id)
            res.json(result)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    insertarCarrito: async (req, res) => {
        try {
            const { idUsuario, idProducto, cantidad } = req.body
            const result = await Carrito.insertarCarrito(idUsuario, idProducto, cantidad)
            res.json(result)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    eliminarCarrito: async (req, res) => {
        try {
            const { idUsuario, idProducto } = req.body
            const result = await Carrito.eliminarCarrito(idUsuario, idProducto)
            res.json(result)
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}

export default httpCarrito