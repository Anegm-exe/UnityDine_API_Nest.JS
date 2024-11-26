import { Document } from 'mongoose';
export type RestaurantDocument = Restaurant & Document;
export declare class Restaurant {
    _id: number;
    name: string;
    Location: string;
    contact: string;
    rating: number;
}
export declare const RestaurantSchema: import("mongoose").Schema<Restaurant, import("mongoose").Model<Restaurant, any, any, any, Document<unknown, any, Restaurant> & Restaurant & Required<{
    _id: number;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Restaurant, Document<unknown, {}, import("mongoose").FlatRecord<Restaurant>> & import("mongoose").FlatRecord<Restaurant> & Required<{
    _id: number;
}> & {
    __v: number;
}>;
