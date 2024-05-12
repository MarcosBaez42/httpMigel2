import productos from "../modulos/productos.js";

const productosHelper = {
    existeProductoId: async (id) => {
        const producto = await productos.findOne({ _id: id });
        if (!producto) {
            throw new Error(`El ID no existe ${id}`);
        }
    }
}

export default productosHelper;