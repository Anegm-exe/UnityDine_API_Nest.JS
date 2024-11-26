import { Model } from 'mongoose';
import { Order, OrderDocument } from '../schemas/Order.schema';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    create(order: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateData: Partial<Order>): Promise<Order>;
    delete(id: number): Promise<void>;
}
