import { Schema, model } from 'mongoose';
import { Item } from './Item.schema';   
// A SCHEMA BLUEPRINT
export const OrderSchema = new Schema(
{
    _Oid: { type: Number, required: true },
    RID: { type: String, required: true },
    orderDate: { type: Date, required: false },
    itemsById: { type: [String], required: true },
    orderstatus: { type: String, required: false },
},
);

export const Order = model('Order', OrderSchema); 