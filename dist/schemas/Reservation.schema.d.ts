import { Document } from 'mongoose';
export type ReservationDocument = Reservation & Document;
export declare class Reservation {
    _id: number;
    _Cid: number;
    _Tid: number;
    reservationTime: Date;
    reservationStatus: boolean;
}
export declare const ReservationSchema: import("mongoose").Schema<Reservation, import("mongoose").Model<Reservation, any, any, any, Document<unknown, any, Reservation> & Reservation & Required<{
    _id: number;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservation, Document<unknown, {}, import("mongoose").FlatRecord<Reservation>> & import("mongoose").FlatRecord<Reservation> & Required<{
    _id: number;
}> & {
    __v: number;
}>;
