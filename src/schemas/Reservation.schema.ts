import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservationDocument = Reservation & Document;

@Schema({ timestamps: true })
export class Reservation {
    @Prop({ required: true, ref: 'User' })
    customer_id: string;

    @Prop({ required: true, ref: 'Table'})
    table_id: string;

    @Prop({ required: true })
    reservation_time: Date;

    @Prop({ required: true })
    end_time: Date;

    @Prop({ default: 'Ready', enum:['Ready','Reserved']})
    reservation_status: string;

    readonly _id?: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);