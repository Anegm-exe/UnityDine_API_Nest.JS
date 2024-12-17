import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema({ timestamps: true })
export class Reservation {
    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    customer_id: string;

    @Prop({ type: Types.ObjectId, ref: "Table", required: true })
    table_id: string;

    @Prop({ type: Types.ObjectId, ref: "Restaurant", required: true })
    restaurant_id: string;

    @Prop({ required: true })
    reservation_time: Date;

    @Prop({ required: true })
    end_time: Date;

    @Prop({ required: true })
    guests: number;

    @Prop({ default: 'Ready', enum: ['Pending','Reserved','Complete']})
    reservation_status: string;

    readonly _id?: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);