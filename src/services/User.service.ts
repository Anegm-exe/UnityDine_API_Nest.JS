import { Types } from 'mongoose';
import { User } from '../schemas/User.schema';

class UserService {

    // Create a new user
    async createUser(userData: any): Promise<any> {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    // Get all users
    async getAllUsers(): Promise<any[]> {
        try {
            return await User.find();
        } catch (error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    // Get a user by ID
    async getUserById(id: string): Promise<any | null> {
        try {
            return await User.findById(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        }
    }

    // Get a user by Email (New method)
    async getUserByEmail(email: string): Promise<any | null> {
        try {
            return await User.findOne({ email });
        } catch (error) {
            throw new Error(`Error fetching user by email: ${error.message}`);
        }
    }

    // Update a user by ID
    async updateUser(id: string, updateData: Partial<any>): Promise<any | null> {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                new Types.ObjectId(id),
                updateData,
                { new: true }
            );

            if (!updatedUser) {
                throw new Error('User not found');
            }

            return updatedUser;
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    // Delete a user by ID
    async deleteUser(id: string): Promise<any | null> {
        try {
            return await User.findByIdAndDelete(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
}

export default new UserService();
