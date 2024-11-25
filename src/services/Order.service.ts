import { Types } from 'mongoose';
import { Order } from '../schemas/Order.schema';

class OrderService {

    // Get all Restraunt
    async getAllOrder(): Promise<any[]> {
        try {
            return await Order.find();
        } catch (error) {
            throw new Error(`Error fetching Order: ${error.message}`);
        }
    }

    // Get a Restraunt by ID
    async getOrderById(id: string): Promise<any | null> {
        try {
            return await Order.findById(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching Order by ID: ${error.message}`);
        }
    }

    // Update a Restraunt by ID
    async updateOrder(id: string, updateData: Partial<any>): Promise<any | null> {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                new Types.ObjectId(id),
                updateData,
                { new: true }
            );

            if (!updatedOrder) {
                throw new Error('Order not found');
            }

            return updatedOrder;
        } catch (error) {
            throw new Error(`Error updating Order: ${error.message}`);
        }
    }

    // Delete a Seating by ID
    async deleteOrder(id: string): Promise<any | null> {
        try {
            return await Order.findByIdAndDelete(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting Order: ${error.message}`);
        }
    }
    async addItems(id: string, newItems: string[]): Promise<any | null> {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                new Types.ObjectId(id),
                { $push: { itemsById: { $each: newItems } } },
                { new: true }
            );

            if (!updatedOrder) {
                throw new Error('Order not found');
            }

            return updatedOrder;
        } catch (error) {
            throw new Error(`Error updating Order: ${error.message}`);
        }
    }
    async removeItems(id: string, itemsToRemove: string[]): Promise<any | null> {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                new Types.ObjectId(id),
                { $pull: { itemsById: { $in: itemsToRemove } } },
                { new: true }
            );

            if (!updatedOrder) {
                throw new Error('Order not found');
            }

            return updatedOrder;
        } catch (error) {
            throw new Error(`Error updating Order: ${error.message}`);
        }
    }
}

export default new OrderService();

