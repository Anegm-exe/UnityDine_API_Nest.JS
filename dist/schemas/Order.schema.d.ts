import { Document } from 'mongoose';
export type OrderDocument = Order & Document;
export declare class Order {
    restaurant_id: string;
    reservation_id: string;
    table_id: string;
    items_ordered: string[];
    order_status: string;
    readonly _id?: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
