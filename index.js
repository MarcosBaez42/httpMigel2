import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(json())
app.use(cors())

import usuario from './src/rutas/usuarios.js';
import cliente from './src/rutas/clientes.js';
import producto from './src/rutas/productos.js';
import venta from './src/rutas/venta.js';
import detalleVenta from "./src/rutas/detalleVenta.js";
import carrito from "./src/rutas/carrito.js";


app.use('/api/usuarios',usuario)
app.use('/api/clientes',cliente)
app.use('/api/productos',producto)
app.use('/api/ventas',venta)
app.use('/api/detalleventas',detalleVenta)
app.use('/api/carrito',carrito)


app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log(process.env)); 
});