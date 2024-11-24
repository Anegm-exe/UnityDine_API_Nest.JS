"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Seating_schema_1 = require("../schemas/Seating.schema");
class SeatingService {
    async createSeating(seatingData) {
        try {
            const seating = new Seating_schema_1.Seating(seatingData);
            return await seating.save();
        }
        catch (error) {
            throw new Error(`Error creating seating: ${error.message}`);
        }
    }
    async getAllSeatings() {
        try {
            return await Seating_schema_1.Seating.find();
        }
        catch (error) {
            throw new Error(`Error fetching seating: ${error.message}`);
        }
    }
    async getSeatingById(id) {
        try {
            return await Seating_schema_1.Seating.findById(new mongoose_1.Types.ObjectId(id));
        }
        catch (error) {
            throw new Error(`Error fetching seating by ID: ${error.message}`);
        }
    }
    async updateSeating(id, updateData) {
        try {
            const updatedSeating = await Seating_schema_1.Seating.findByIdAndUpdate(new mongoose_1.Types.ObjectId(id), updateData, { new: true });
            if (!updatedSeating) {
                throw new Error('Seating not found');
            }
            return updatedSeating;
        }
        catch (error) {
            throw new Error(`Error updating seating: ${error.message}`);
        }
    }
    async deleteSeating(id) {
        try {
            return await Seating_schema_1.Seating.findByIdAndDelete(new mongoose_1.Types.ObjectId(id));
        }
        catch (error) {
            throw new Error(`Error deleting seating: ${error.message}`);
        }
    }
}
exports.default = new SeatingService();
//# sourceMappingURL=Seating.service.js.map