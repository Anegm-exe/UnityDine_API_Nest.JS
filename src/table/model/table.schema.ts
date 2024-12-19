import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TableDocument = Table & Document;

@Schema({ timestamps: true })
export class Table {
    @Prop({ type: Types.ObjectId, ref: "Restaurant", required: true })
    restaurant_id: string;

    @Prop({ type: [Types.ObjectId], ref: "Reservation", required: false })
    reservation_ids: string[];

    @Prop({ required: true, min: 1 })
    capacity: number;

    @Prop({ default: true })
    available: boolean;

    readonly _id?: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);