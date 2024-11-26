import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema({ timestamps: true })
export class Reservation {
    @Prop({ required: true })
    _id: number;

    @Prop({ required: true })
    _Cid: number;

    @Prop({ required: true })
    _Tid: number;

    @Prop({ required: true })
    reservationTime: Date;

    @Prop({ required: true, default: 0 })
    reservationStatus: boolean; // True for Confirmed, False for Free
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);