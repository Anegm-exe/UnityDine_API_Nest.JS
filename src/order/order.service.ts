import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'schemas/order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    // Create A Order With Data Provided
    async create(order: Order): Promise<Order> {
        const newOrder = new this.orderModel(order);
        return newOrder.save();
    }

    // Get All Orders From The Table
    async findAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }

    // Find A Specific Order
    async findOne(id: number): Promise<Order> {
        const order = await this.orderModel.findOne({ _id: id }).exec();
        if (!order) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }

    // Update The Content Of An Order
    async update(id: number, updateData: Partial<Order>): Promise<Order> {
        const updatedOrder = await this.orderModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedOrder) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return updatedOrder;
    }

    // Delete A Order
    async delete(id: number): Promise<void> {
        const result = await this.orderModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
    }
}