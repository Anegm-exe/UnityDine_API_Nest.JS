"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User_schema_1 = require("../schemas/User.schema");
class UserService {
    async createUser(userData) {
        try {
            const user = new User_schema_1.User(userData);
            return await user.save();
        }
        catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
    async getAllUsers() {
        try {
            return await User_schema_1.User.find();
        }
        catch (error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }
    }
    async getUserById(id) {
        try {
            return await User_schema_1.User.findById(new mongoose_1.Types.ObjectId(id));
        }
        catch (error) {
            throw new Error(`Error fetching user by ID: ${error.message}`);
        }
    }
    async getUserByEmail(email) {
        try {
            return await User_schema_1.User.findOne({ email });
        }
        catch (error) {
            throw new Error(`Error fetching user by email: ${error.message}`);
        }
    }
    async updateUser(id, updateData) {
        try {
            const updatedUser = await User_schema_1.User.findByIdAndUpdate(new mongoose_1.Types.ObjectId(id), updateData, { new: true });
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser;
        }
        catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }
    async deleteUser(id) {
        try {
            return await User_schema_1.User.findByIdAndDelete(new mongoose_1.Types.ObjectId(id));
        }
        catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
}
exports.default = new UserService();
//# sourceMappingURL=User.service.js.map