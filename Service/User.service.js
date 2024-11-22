const User = require('./user.model'); // Adjust the path based on your project structure
const mongoose = require('mongoose')

class UserService {
    // Create a new user
    async createUser(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    // Get all users
    async getAllUsers() {
        try {
            return await User.find();
        } catch (error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }

    // Get a user by ID
    async getUserById(id) {
        try {
            return await User.findById(new mongoose.Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        }
    }

    // Update a user by ID
    async updateUser(id, updateData) {
        try {
            return await User.findByIdAndUpdate(new mongoose.Types.ObjectId(id), updateData, { new: true });
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    // Delete a user by ID
    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(new mongoose.Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
}

module.exports = new UserService();
