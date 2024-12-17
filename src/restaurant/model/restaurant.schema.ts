import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

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

    @Prop({ default: [], type: Types.ObjectId, ref: "Reservation" })
    reservations: string[];

    @Prop({ default: [], type: Types.ObjectId, ref: "Order" })
    orders: string[]

    @Prop({ default: [], type: Types.ObjectId, ref: "Table" })
    tables: string[]

    @Prop({ default: [], type: Types.ObjectId, ref: "Item" })
    items: string[]

    readonly _id?: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);