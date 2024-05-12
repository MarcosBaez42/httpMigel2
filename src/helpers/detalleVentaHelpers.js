import detalleVenta from "../modulos/detalleVenta.js";

const detalleVentaHelper = {
    existeDetalleVentaId: async (id, req) => {
        const existe = await detalleVenta.findOne(id)
        if (!existe) {
            throw new Error(`Registro no existe ${id}`)
        }
        req.req.detalleVentabd = existe
    }
}

export default detalleVentaHelper;