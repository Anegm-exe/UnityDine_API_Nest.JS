import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SeatingDocument = Seating & Document;

@Schema({ timestamps: true })
export class Seating {
    @Prop({ required: true })
    _id: number;

    @Prop({ required: true })
    capacity: number;

    @Prop({ required: true })
    available: boolean;
}

export const SeatingSchema = SchemaFactory.createForClass(Seating);