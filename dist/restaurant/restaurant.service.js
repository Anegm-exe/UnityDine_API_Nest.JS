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
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const restaurant_schema_1 = require("../schemas/restaurant.schema");
let RestaurantService = class RestaurantService {
    constructor(restaurantModel) {
        this.restaurantModel = restaurantModel;
    }
    async create(restaurant) {
        const newRestaurant = new this.restaurantModel(restaurant);
        return newRestaurant.save();
    }
    async findAll() {
        return this.restaurantModel.find().exec();
    }
    async findOne(id) {
        const restaurant = await this.restaurantModel.findOne({ _id: id }).exec();
        if (!restaurant) {
            throw new common_1.NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return restaurant;
    }
    async update(id, updateData) {
        const updatedRestaurant = await this.restaurantModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedRestaurant) {
            throw new common_1.NotFoundException(`Restaurant with ID ${id} not found`);
        }
        return updatedRestaurant;
    }
    async delete(id) {
        const result = await this.restaurantModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Restaurant with ID ${id} not found`);
        }
    }
};
exports.RestaurantService = RestaurantService;
exports.RestaurantService = RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(restaurant_schema_1.Restaurant.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RestaurantService);
//# sourceMappingURL=restaurant.service.js.map