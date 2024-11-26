import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seating, SeatingDocument } from '../schemas/Seating.schema';

@Injectable()
export class SeatingService {
    constructor(@InjectModel(Seating.name) private seatingModel: Model<SeatingDocument>) { }

    // Create A Table With Data Provided
    async create(seating: Seating): Promise<Seating> {
        const newSeating = new this.seatingModel(seating);
        return newSeating.save();
    }

    // Get All Tables From The Table
    async findAll(): Promise<Seating[]> {
        return this.seatingModel.find().exec();
    }

    // Find A Specific Table
    async findOne(id: number): Promise<Seating> {
        const seating = await this.seatingModel.findOne({ _id: id }).exec();
        if (!seating) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return seating;
    }

    // Update The Content Of An Table
    async update(id: number, updateData: Partial<Seating>): Promise<Seating> {
        const updatedSeating = await this.seatingModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedSeating) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
        return updatedSeating;
    }

    // Delete A Table
    async delete(id: number): Promise<void> {
        const result = await this.seatingModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Table with ID ${id} not found`);
        }
    }
}