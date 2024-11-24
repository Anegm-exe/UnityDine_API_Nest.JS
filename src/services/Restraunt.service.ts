import { Types } from 'mongoose';
import { Restraunt } from '../schemas/Restraunt.schema';

class RestrauntService {

    // Get all Restraunt
    async getAllRestraunt(): Promise<any[]> {
        try {
            return await Restraunt.find();
        } catch (error) {
            throw new Error(`Error fetching Restraunt: ${error.message}`);
        }
    }

    // Get a Restraunt by ID
    async getRestrauntById(id: string): Promise<any | null> {
        try {
            return await Restraunt.findById(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching Restraunt by ID: ${error.message}`);
        }
    }

    // Update a Restraunt by ID
    async updateRestraunt(id: string, updateData: Partial<any>): Promise<any | null> {
        try {
            const updatedRestraunt = await Restraunt.findByIdAndUpdate(
                new Types.ObjectId(id),
                updateData,
                { new: true }
            );

            if (!updatedRestraunt) {
                throw new Error('Restraunt not found');
            }

            return updatedRestraunt;
        } catch (error) {
            throw new Error(`Error updating Restraunt: ${error.message}`);
        }
    }

    // Delete a Seating by ID
    async deleteRestraunt(id: string): Promise<any | null> {
        try {
            return await Restraunt.findByIdAndDelete(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting Restraunt: ${error.message}`);
        }
    }
}

export default new RestrauntService();
