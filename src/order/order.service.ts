import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './model/order.schema';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        private readonly restaurantService: RestaurantService
    ) { }

    // Create A Order With Data Provided
    async create(createOrderDto: Order): Promise<Order> {
        // Create the order first
        const createdOrder = new this.orderModel(createOrderDto);
        const order = await createdOrder.save();

        // Add the order ID to the associated restaurant's `orders` array
        const restaurant = await this.restaurantService.findOne(createOrderDto.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${createOrderDto.restaurant_id} not found`);
        }
        await this.restaurantService.addOrder(order.restaurant_id,order._id);
        return createdOrder;
    }

    // Get All Orders From The Table
    async findAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }

    // Find A Specific Order
    async findOne(id: string): Promise<Order> {
        const order = await this.orderModel.findOne({ _id: id }).exec();
        if (!order) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }

    // Update The Content Of An Order
    async update(id: string, updateData: Partial<Order>): Promise<Order> {
        const updatedOrder = await this.orderModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedOrder) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return updatedOrder;
    }

    // Delete A order
    async delete(id: string): Promise<void> {
        const order = await this.orderModel.findByIdAndDelete({ _id: id }).exec();
        // is deleted
        if (!order) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        // delete the order ID to the associated restaurant's `orders` array
        const restaurant = await this.restaurantService.findOne(order.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${order.restaurant_id} not found`);
        }
        await this.restaurantService.deleteOrder(order.restaurant_id,order._id);
    }

    // delete orders by reservation
    async deleteByReservation(reservation_id: string): Promise<void> {
        const orders = await this.orderModel.find({ reservation_id: reservation_id }).exec();
        // loop and delete orders
        Promise.all(orders.map(async (order)=>{
            await this.delete(order._id);
        }));
    }
}