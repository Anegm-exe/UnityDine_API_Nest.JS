import mongoose, { Document } from 'mongoose';
import { Reservation } from './reservation.schema';
import { Order } from './order.schema';
import { Table } from './table.schema';
import { Item } from './item.schema';
export type RestaurantDocument = Restaurant & Document;
export declare class Restaurant {
    name: string;
    Location: string;
    contact: string;
    rating: number;
    reservations: Reservation[];
    orders: Order[];
    tables: Table[];
    items: Item[];
    readonly _id?: string;
}
export declare const RestaurantSchema: mongoose.Schema<Restaurant, mongoose.Model<Restaurant, any, any, any, mongoose.Document<unknown, any, Restaurant> & Restaurant & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Restaurant, mongoose.Document<unknown, {}, mongoose.FlatRecord<Restaurant>> & mongoose.FlatRecord<Restaurant> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
