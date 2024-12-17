import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './model/item.schema';

@Injectable()
export class ItemService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) { }

    // Create A Menu Item With Data Provided
    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return newItem.save();
    }

    // Get All Menu Items From The Table
    async findAll(): Promise<Item[]> {
        return this.itemModel.find().exec();
    }

    // Find A Specific Menu Item by ID
    async findOne(id: number): Promise<Item> {
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
    async update(id: number, updateData: Partial<Item>): Promise<Item> {
        const updatedItem = await this.itemModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedItem) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        return updatedItem;
    }

    // Delete A Menu Item
    async delete(id: number): Promise<void> {
        const result = await this.itemModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
    }
}