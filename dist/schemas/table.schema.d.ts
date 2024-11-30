import { Document } from 'mongoose';
export type TableDocument = Table & Document;
export declare class Table {
    capacity: number;
    available: boolean;
    readonly _id?: string;
}
export declare const TableSchema: import("mongoose").Schema<Table, import("mongoose").Model<Table, any, any, any, Document<unknown, any, Table> & Table & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Table, Document<unknown, {}, import("mongoose").FlatRecord<Table>> & import("mongoose").FlatRecord<Table> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
