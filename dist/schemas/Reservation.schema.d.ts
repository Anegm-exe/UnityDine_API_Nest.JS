import { Document } from 'mongoose';
export type ReservationDocument = Reservation & Document;
export declare class Reservation {
    customer_id: string;
    table_id: string;
    reservation_time: Date;
    end_time: Date;
    reservation_status: string;
    readonly _id?: string;
}
export declare const ReservationSchema: import("mongoose").Schema<Reservation, import("mongoose").Model<Reservation, any, any, any, Document<unknown, any, Reservation> & Reservation & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservation, Document<unknown, {}, import("mongoose").FlatRecord<Reservation>> & import("mongoose").FlatRecord<Reservation> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
