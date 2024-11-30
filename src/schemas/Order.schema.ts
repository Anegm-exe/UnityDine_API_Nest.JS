import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
    @Prop({ required: true })
    restaurant_id: string;

    @Prop({ required: true })
    items_ordered: string[];

    @Prop({ default:Date.now })
    order_date: Date;

    @Prop({ required: true, enum: ['Recived', 'In-Kitchen', 'Ready'] })
    order_status: string;

    readonly _id?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);