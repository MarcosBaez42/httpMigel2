import Carrito from "../modulos/carrito.js"

export const carritoHelper = {
    existeCarritoIdValido: async (id) => {
        const existe = await Carrito.findOne({ id: id });
        return !!existe;
    }
}