import httpDetalleVenta from "./../controles/detalleVenta.js"
import { Router } from "express"
import { check } from "express-validator"
import validarCampos from "./../middlewares/validarCampos.js"
import { validarJWT } from "../middlewares/validarJWT.js"
import detalleVentaHelpers from "./../helpers/detalleVentaHelpers.js"

const router = Router();

// get//listar por un id venta
router.get("/listarIdDetalleVenta/:id", [
    check('id', 'El idVenta es obligatorio').not().isEmpty(),
    check('id', 'El idVenta debe ser un número').isNumeric(),
    check('id').custom(detalleVentaHelpers.existeDetalleVentaId),
    validarCampos

], httpDetalleVenta.listarIdDetalleVenta)
// post//insertar
router.post("/insertarDetalleVenta", [
    check('id', 'El idVenta es obligatorio').not().isEmpty(),
    check('idProducto', 'El idProducto es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    check('descuento', 'El descuento es obligatorio').not().isEmpty(),
    check('total', 'El total es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    validarCampos,
    validarJWT

], httpDetalleVenta.insertarDetalleVenta)
// put//modificar
router.put("/modificarDetalleVenta", [
    check('idProducto', 'El idProducto es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    check('descuento', 'El descuento es obligatorio').not().isEmpty(),
    check('total', 'El total es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('id', 'El id es obligatorio').not().isEmpty(),
    validarCampos,
    validarJWT
], httpDetalleVenta.modificarDetalleVenta)

export default router;