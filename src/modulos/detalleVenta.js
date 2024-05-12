import { Schema, model } from 'mongoose';

const dbDetalleVenta = new Schema({
    id: { type: String, required: true },
    producto: { type: Schema.Types.ObjectId, ref: 'producto' },
    Venta: { type: Schema.Types.ObjectId, ref: 'venta' },
    valor: { type: Number, default: 0 },
    cantidad: { type: Number, default: 0 }
}, { timestamps: true });

export default model("detalleVenta", dbDetalleVenta);