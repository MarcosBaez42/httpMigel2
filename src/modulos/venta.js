import { Schema, model } from 'mongoose';

const dbVenta = new Schema({
    producto: { type: Schema.Types.ObjectId, ref: 'producto' },
    cliente: { type: Schema.Types.ObjectId, ref: 'cliente' },
    fecha: { type: Date, default: Date.now },
    valorTotal: { type: Number, default: 0 },
    descuento: { type: Number, default: 0 }
}, { timestamps: true });

export default model("venta", dbVenta);