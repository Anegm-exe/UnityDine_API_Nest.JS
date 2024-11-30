import { Document } from 'mongoose';
export type ItemDocument = Item & Document;
export declare class Item {
    restaurant_id: string;
    name: string;
    type: string;
    description: string;
    price: number;
    available: boolean;
    readonly _id?: string;
}
export declare const ItemSchema: import("mongoose").Schema<Item, import("mongoose").Model<Item, any, any, any, Document<unknown, any, Item> & Item & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Item, Document<unknown, {}, import("mongoose").FlatRecord<Item>> & import("mongoose").FlatRecord<Item> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
