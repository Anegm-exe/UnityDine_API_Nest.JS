import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema({ timestamps: true })
export class Restaurant {
    @Prop({ required: true })
    _id: number;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    Location: string;

    @Prop({ required: true })
    contact: string;

    @Prop({ required: true })
    rating: number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);