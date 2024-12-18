import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './model/restaurant.schema';

@Injectable()
export class RestaurantService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) { }

    // Create A Restaurant With Data Provided
    async create(restaurant: Restaurant): Promise<Restaurant> {
        const newRestaurant = new this.restaurantModel(restaurant);
        return newRestaurant.save();
    }

    // Get All Restaurants From The Table
    async findAll(): Promise<Restaurant[]> {
        return await this.restaurantModel.find().exec();
    }

    // Find A Specific Restaurant
    async findOne(id: string): Promise<Restaurant> {
        const restaurant = await this.restaurantModel.findOne({ _id: id }).exec();
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return restaurant;
    }

    // Update The Content Of A Restaurant
    async update(id: string, updateData: Partial<Restaurant>): Promise<Restaurant> {
        const updatedRestaurant = await this.restaurantModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedRestaurant) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedRestaurant;
    }

    // Delete A Restaurant
    async delete(id: string): Promise<void> {
        const result = await this.restaurantModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
    }
    // push reservation in array
    async addReservation(id: string, reservation_id: string): Promise<Restaurant> {
        const updatedRestaurant = await this.restaurantModel.findByIdAndUpdate({_id:id},{ $push: { reservations: reservation_id}},{new:true});
        if(!updatedRestaurant) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedRestaurant;
    }

    // push order in array
    async addOrder(id: string, order_id: string): Promise<Restaurant> {
        const updatedOrder = await this.restaurantModel.findByIdAndUpdate({_id:id},{ $push: { orders: order_id}},{new:true});
        if(!updatedOrder) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedOrder;
    }

    // push item in array
    async addItem(id: string, item_id: string): Promise<Restaurant> {
        const updatedItem = await this.restaurantModel.findByIdAndUpdate({_id:id},{ $push: { items: item_id}},{new:true});
        if(!updatedItem) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedItem;
    }

    // push table in array
    async addTable(id: string, table_id: string): Promise<Restaurant> {
        const updatedTable = await this.restaurantModel.findByIdAndUpdate({_id:id},{ $push: { tables: table_id}},{new:true});
        if(!updatedTable) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedTable;
    }
}