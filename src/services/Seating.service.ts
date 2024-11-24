import { Types } from 'mongoose';
import { Seating } from '../schemas/Seating.schema';

class SeatingService {


    async createSeating(seatingData: any): Promise<any> {
        try {
            const seating = new Seating(seatingData);
            return await seating.save();
        } catch (error) {
            throw new Error(`Error creating seating: ${error.message}`);
        }
    }

    // Get all seating
    async getAllSeatings(): Promise<any[]> {
        try {
            return await Seating.find();
        } catch (error) {
            throw new Error(`Error fetching seating: ${error.message}`);
        }
    }

    // Get a seating by ID
    async getSeatingById(id: string): Promise<any | null> {
        try {
            return await Seating.findById(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching seating by ID: ${error.message}`);
        }
    }

    // Update a Seating by ID
    async updateSeating(id: string, updateData: Partial<any>): Promise<any | null> {
        try {
            const updatedSeating = await Seating.findByIdAndUpdate(
                new Types.ObjectId(id),
                updateData,
                { new: true }
            );

            if (!updatedSeating) {
                throw new Error('Seating not found');
            }

            return updatedSeating;
        } catch (error) {
            throw new Error(`Error updating seating: ${error.message}`);
        }
    }

    // Delete a Seating by ID
    async deleteSeating(id: string): Promise<any | null> {
        try {
            return await Seating.findByIdAndDelete(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting seating: ${error.message}`);
        }
    }
}

export default new SeatingService();
