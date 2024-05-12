import httpVenta from "./../controles/venta.js"
import { Router } from "express"
import { check } from "express-validator"
import validarCampos from "../middlewares/validarCampos.js"
import ventaHelpers from "../helpers/ventasHelpers.js"
import { validarJWT } from "../middlewares/validarJWT.js"

const router = Router();

///ventas   ojo listar los detalles
// router.get()//listar todo
router.get("/listarTodasVentas", httpVenta.listarTodasVentas)
// get//listar por un id
router.get("/listarIdVenta", [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(ventaHelpers.existeVentaId),
    validarCampos
], httpVenta.listarIdVenta)
//  listar activos, listar inactivos
router.get("/listarVentaActiva", httpVenta.listarVentaActiva)
//  listar ventas del cliente xxx
router.get("/listarVentaCliente/:id", [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("id", "El id debe ser un número").isNumeric(),
    validarCampos
], httpVenta.listarVentaCliente)
// listar todas las ventas entre dos fechas
router.get("/listarVentaFecha", [
    check("fecha1", "La fecha1 es obligatoria").not().isEmpty(),
    check("fecha2", "La fecha2 es obligatoria").not().isEmpty(),
    validarCampos
], httpVenta.listarVentaFecha)
//  listar ventas con un valor superior a xxxx
router.get("/listarVentaValor", [
    check("valor", "El valor es obligatorio").not().isEmpty(),
    validarCampos
], httpVenta.listarVentaValor)
// total de ventas entre dos fechas
router.get("/listarTotalVentaFecha", [
    check("fecha1", "La fecha1 es obligatoria").not().isEmpty(),
    check("fecha2", "La fecha2 es obligatoria").not().isEmpty(),
    validarCampos
], httpVenta.listarTotalVentaFecha)
// total descuento
router.get("/listarTotalDescuento", httpVenta.listarTotalDescuento)
// post//insertar
router.post("/insertarVenta", [
    check("producto", "El producto es obligatorio").not().isEmpty(),
    check("cliente", "El cliente es obligatorio").not().isEmpty(),
    validarCampos,
    validarJWT
], httpVenta.insertarVenta)
// put//modificar
router.put("/modificarVenta", [
    check("producto", "El producto es obligatorio").not().isEmpty(),
    check("cliente", "El cliente es obligatorio").not().isEmpty(),
    validarCampos,
    validarJWT
], httpVenta.modificarVenta)
// put//activar
router.put("/activarVenta/:id", [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(ventaHelpers.existeVentaId),
    validarCampos,
    validarJWT
], httpVenta.activarVenta)
// put//desactivar
router.put("/desactivarVenta/:id", [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(ventaHelpers.existeVentaId),
    validarCampos,
    validarJWT
], httpVenta.desactivarVenta)

export default router;
