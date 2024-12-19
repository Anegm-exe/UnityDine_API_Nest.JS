import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './model/item.schema';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class ItemService {
    constructor(
        @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
        private readonly restaurantService: RestaurantService
    ) { }

    // Create A Menu Item With Data Provided
    async create(createItemDto: Item): Promise<Item> {
        // Create the item first
        const createdItem = new this.itemModel(createItemDto);
        const item = await createdItem.save();

        // Add the item ID to the associated restaurant's `items` array
        const restaurant = await this.restaurantService.findOne(createItemDto.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${createItemDto.restaurant_id} not found`);
        }
        await this.restaurantService.addItem(item.restaurant_id,item._id);
        return createdItem;
    }

    // Get All Menu Items From The Table
    async findAll(): Promise<Item[]> {
        return this.itemModel.find().exec();
    }

    // Find A Specific Menu Item by ID
    async findOne(id: string): Promise<Item> {
        const item = await this.itemModel.findOne({ _id: id }).exec();
        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        return item;
    }

    async findByRestaurantId(restaurantId: string): Promise<Item[]> {
        return await this.itemModel.find({ restaurant_id: restaurantId }).exec();
    }

    // Update The Content Of An Menu Item
    async update(id: string, updateData: Partial<Item>): Promise<Item> {
        const updatedItem = await this.itemModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedItem) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        return updatedItem;
    }

    // Delete A Menu Item
    async delete(id: string): Promise<void> {
        const item = await this.itemModel.findByIdAndDelete({ _id: id }).exec();
        // is deleted
        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        // delete the item ID to the associated restaurant's `items` array
        const restaurant = await this.restaurantService.findOne(item.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${item.restaurant_id} not found`);
        }
        await this.restaurantService.deleteItem(item.restaurant_id,item._id);
    }
}