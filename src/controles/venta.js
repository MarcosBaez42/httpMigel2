import venta from '../modulos/venta.js'

const httpVenta = {
    listarTodasVentas: async (req, res) => {
        try {
            const result = await venta.listarTodasVentas();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarIdVenta: async (req, res) => {
        try {
            const id = req.query.id;
            const result = await venta.listarIdVenta(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarVentaActiva: async (req, res) => {
        try {
            const result = await venta.listarVentaActiva();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarVentaCliente: async (req, res) => {
        try {
            const id = req.query.id;
            const result = await venta.listarVentaCliente(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarVentaFecha: async (req, res) => {
        try {
            const fecha1 = req.query.fecha1;
            const fecha2 = req.query.fecha2;
            const result = await venta.listarVentaFecha(fecha1, fecha2);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarVentaValor: async (req, res) => {
        try {
            const valor = req.query.valor;
            const result = await venta.listarVentaValor(valor);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarTotalVentaFecha: async (req, res) => {
        try {
            const fecha1 = req.query.fecha1;
            const fecha2 = req.query.fecha2;
            const result = await venta.listarTotalVentaFecha(fecha1, fecha2);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    listarTotalDescuento: async (req, res) => {
        try {
            const result = await venta.listarTotalDescuento();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    insertarVenta: async (req, res) => {
        try {
            const body = req.body;
            const result = await venta.insertarVenta(body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    modificarVenta: async (req, res) => {
        try {
            const body = req.body;
            const result = await venta.modificarVenta(body);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    activarVenta: async (req, res) => {
        try {
            const id = req.query.id;
            const result = await venta.activarVenta(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    desactivarVenta: async (req, res) => {
        try {
            const id = req.query.id;
            const result = await venta.desactivarVenta(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default httpVenta;