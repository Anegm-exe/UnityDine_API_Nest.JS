import { Document } from 'mongoose';
export type OrderDocument = Order & Document;
export declare class Order {
    _id: number;
    _Rid: number;
    itemsOrdered: string[];
    orderDate: Date;
    orderStatus: 'Recived' | 'In-Kitchen' | 'Ready';
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & Required<{
    _id: number;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & Required<{
    _id: number;
}> & {
    __v: number;
}>;
