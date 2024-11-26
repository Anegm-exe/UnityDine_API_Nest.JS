import { OrderService } from '../services/Order.service';
import { Order } from '../schemas/Order.schema';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: Partial<Order>): Promise<Order>;
    delete(id: number): Promise<void>;
}
