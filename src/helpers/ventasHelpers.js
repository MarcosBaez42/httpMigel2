import venta from "./../controles/venta.js";

const ventaHelper = {
    existeVentaId: async (id, req) => {
        const existe = await venta.findOne(id)
        if (!existe) {
            throw new Error(`Registro no existe ${id}`)
        }
        req.req.ventabd = existe
    }
}

export default ventaHelper;