import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table, TableDocument } from './model/table.schema';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class TableService {
    constructor(
        @InjectModel(Table.name) private tableModel: Model<TableDocument>,
        private readonly restaurantService: RestaurantService
    ) { }

    // Create A Table With Data Provided
    async create(createTableDto: Table): Promise<Table> {
        // Create the table first
        const createdTable = new this.tableModel(createTableDto);
        const table = await createdTable.save();

        // Add the table ID to the associated restaurant's `tables` array
        const restaurant = await this.restaurantService.findOne(createTableDto.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${createTableDto.restaurant_id} not found`);
        }
        await this.restaurantService.addTable(table.restaurant_id,table._id);
        return createdTable;
    }
 

    // Get All Tables From The Table
    async findAll(): Promise<Table[]> {
        return this.tableModel.find().exec();
    }

    // Find A Specific Table
    async findOne(id: string): Promise<Table> {
        const table = await this.tableModel.findOne({ _id: id }).exec();
        if (!table) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return table;
    }

    async findByRestaurantId(restaurantId: string): Promise<Table[]> {
        return await this.tableModel.find({ restaurant_id: restaurantId }).exec();
    }

    // Update The Content Of An Table
    async update(id: string, updateData: Partial<Table>): Promise<Table> {
        const updatedTable = await this.tableModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedTable) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return updatedTable;
    }

    // Delete A table
    async delete(id: string): Promise<void> {
        const table = await this.tableModel.findByIdAndDelete({ _id: id }).exec();
        // is deleted
        if (!table) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        // delete the table ID to the associated restaurant's `tables` array
        const restaurant = await this.restaurantService.findOne(table.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${table.restaurant_id} not found`);
        }
        await this.restaurantService.deleteTable(table.restaurant_id,table._id);
    }

    // drop reservation
    async deleteReservation(id: string,reservation_id:string): Promise<Table> {
        const table = await this.tableModel.findByIdAndUpdate({_id:id},{$pull:{reservation_ids:reservation_id}},{new:true}).exec();
        // check if it failed
        if (!table) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return table;
    }
}