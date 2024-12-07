import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table, TableDocument } from '../schemas/table.schema';

@Injectable()
export class TableService {
    constructor(@InjectModel(Table.name) private tableModel: Model<TableDocument>) { }

    // Create A Table With Data Provided
    async create(table: Table): Promise<Table> {
        const newTable = new this.tableModel(table);
        return newTable.save();
    }

    // Get All Tables From The Table
    async findAll(): Promise<Table[]> {
        return this.tableModel.find().exec();
    }

    // Find A Specific Table
    async findOne(id: number): Promise<Table> {
        const table = await this.tableModel.findOne({ _id: id }).exec();
        if (!table) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return table;
    }

    // Update The Content Of An Table
    async update(id: number, updateData: Partial<Table>): Promise<Table> {
        const updatedTable = await this.tableModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedTable) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return updatedTable;
    }

    // Delete A Table
    async delete(id: number): Promise<void> {
        const result = await this.tableModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
    }
}