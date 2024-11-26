"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Seating_schema_1 = require("../schemas/Seating.schema");
let SeatingService = class SeatingService {
    constructor(seatingModel) {
        this.seatingModel = seatingModel;
    }
    async create(seating) {
        const newSeating = new this.seatingModel(seating);
        return newSeating.save();
    }
    async findAll() {
        return this.seatingModel.find().exec();
    }
    async findOne(id) {
        const seating = await this.seatingModel.findOne({ _id: id }).exec();
        if (!seating) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
        return seating;
    }
    async update(id, updateData) {
        const updatedSeating = await this.seatingModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedSeating) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
        return updatedSeating;
    }
    async delete(id) {
        const result = await this.seatingModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
    }
};
exports.SeatingService = SeatingService;
exports.SeatingService = SeatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Seating_schema_1.Seating.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SeatingService);
//# sourceMappingURL=Seating.service.js.map