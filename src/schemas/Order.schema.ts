import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
    @Prop({ type: [{ type: Types.ObjectId, ref: "Restaurant" }], required: true })
    restaurant_id: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: "Reservation" }], required: false })
    reservation_id: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: "Table" }], required: true })
    table_id: string;

    @Prop({ required: true })
    items_ordered: string[];

    @Prop({ required: true, enum: ['Pending', 'In-Kitchen', 'Ready'] })
    order_status: string;

    readonly _id?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);