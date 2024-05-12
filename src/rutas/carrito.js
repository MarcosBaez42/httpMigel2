import httpCarrito from "./../controles/carrito.js";
import { Router } from "express";
import { check } from "express-validator"
import validarCampos from "./../middlewares/validarCampos.js";
import { carritoHelper } from "../helpers/carritoHelpers.js";
import { validarJWT } from "../middlewares/validarJWT.js";


const router = Router();

router.get("/listarCarritoId/:id", [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("id", "El id debe ser un número").isNumeric(),
    check("id").custom(carritoHelper.existeCarritoIdValido),
    validarCampos
], httpCarrito.listarCarritoId);
router.post("/insertarCarrito", [
    check("idUsuario", "El idUsuario es obligatorio").not().isEmpty(),
    check("idProducto", "El idProducto es obligatorio").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    validarCampos,
    validarJWT
], httpCarrito.insertarCarrito);
router.delete("/eliminarCarrito/:id", [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("id", "El id debe ser un número").isNumeric(),
    check("id").custom(carritoHelper.existeCarritoIdValido),
    validarCampos,
    validarJWT
], httpCarrito.eliminarCarrito);

export default router;