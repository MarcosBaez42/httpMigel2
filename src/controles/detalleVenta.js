import detalleVenta from "../modulos/detalleVenta.js"

const httpDetalleVenta = {
    listarIdDetalleVenta: async (req, res) => {
        try {
            const id = req.query.id;
            const result = await detalleVenta.listarIdDetalleVenta(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    insertarDetalleVenta: async (req, res) => {
        try {
            const body = req.body;
            const result = await detalleVenta.insertarDetalleVenta(body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    modificarDetalleVenta: async (req, res) => {
        try {
            const body = req.body;
            const result = await detalleVenta.modificarDetalleVenta(body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default httpDetalleVenta;