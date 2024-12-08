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
        return this.restaurantModel.find().exec();
    }

    // Find A Specific Restaurant
    async findOne(id: number): Promise<Restaurant> {
        const restaurant = await this.restaurantModel.findOne({ _id: id }).exec();
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return restaurant;
    }

    // Update The Content Of A Restaurant
    async update(id: number, updateData: Partial<Restaurant>): Promise<Restaurant> {
        const updatedRestaurant = await this.restaurantModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedRestaurant) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedRestaurant;
    }

    // Delete A Restaurant
    async delete(id: number): Promise<void> {
        const result = await this.restaurantModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Restaurant with ID ${id} not found`);
        }
    }
}