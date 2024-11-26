import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema({ timestamps: true })
export class Item {
    @Prop({ required: true })
    _id: number;

    @Prop({ required: true })
    _Rid: number;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, enum: ['food', 'drink', 'dessert'] })
    type: 'food' | 'drink' | 'dessert';

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ default: true })
    available: boolean;
}

export const ItemSchema = SchemaFactory.createForClass(Item);