import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
    @Prop({ required: true })
    _id: number;

    @Prop({ required: true })
    _Rid: number;

    @Prop({ required: true, type: [String] })
    itemsOrdered: string[];

    @Prop({ required: true })
    orderDate: Date;

    @Prop({ required: true, enum: ['Recived', 'In-Kitchen', 'Ready'] })
    orderStatus: 'Recived' | 'In-Kitchen' | 'Ready';
}

export const OrderSchema = SchemaFactory.createForClass(Order);