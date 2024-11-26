import { Document } from 'mongoose';
export type SeatingDocument = Seating & Document;
export declare class Seating {
    _id: number;
    capacity: number;
    available: boolean;
}
export declare const SeatingSchema: import("mongoose").Schema<Seating, import("mongoose").Model<Seating, any, any, any, Document<unknown, any, Seating> & Seating & Required<{
    _id: number;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Seating, Document<unknown, {}, import("mongoose").FlatRecord<Seating>> & import("mongoose").FlatRecord<Seating> & Required<{
    _id: number;
}> & {
    __v: number;
}>;
