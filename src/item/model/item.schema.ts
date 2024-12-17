import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema({ timestamps: true })
export class Item {
    @Prop({ type: Types.ObjectId, ref: "Restaurant", required: true })
    restaurant_id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, enum: ['food', 'drink', 'dessert'] })
    type: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ default: true })
    available: boolean;

    readonly _id?: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);