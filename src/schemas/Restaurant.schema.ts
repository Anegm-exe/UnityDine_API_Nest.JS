import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Reservation } from './reservation.schema';
import { Order } from './order.schema';
import { Table } from './table.schema';
import { Item } from './item.schema';

export type RestaurantDocument = Restaurant & Document;

@Schema({ timestamps: true })
export class Restaurant {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    contact: string;

    @Prop({ default: 0, min: 0, max: 5 })
    rating: number;

    @Prop({ default: [], type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }]})
    reservations: Reservation[];

    @Prop({ default: [], type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
    orders: Order[]

    @Prop({ default: [], type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Table' }] })
    tables: Table[]

    @Prop({ default: [], type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
    items: Item[]

    readonly _id?: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);