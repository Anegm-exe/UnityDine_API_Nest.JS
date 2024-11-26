import { Document } from 'mongoose';
export type ItemDocument = Item & Document;
export declare class Item {
    _id: number;
    _Rid: number;
    name: string;
    type: 'food' | 'drink' | 'dessert';
    description: string;
    price: number;
    available: boolean;
}
export declare const ItemSchema: import("mongoose").Schema<Item, import("mongoose").Model<Item, any, any, any, Document<unknown, any, Item> & Item & Required<{
    _id: number;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Item, Document<unknown, {}, import("mongoose").FlatRecord<Item>> & import("mongoose").FlatRecord<Item> & Required<{
    _id: number;
}> & {
    __v: number;
}>;
