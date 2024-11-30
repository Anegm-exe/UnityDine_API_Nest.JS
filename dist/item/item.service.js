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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const item_schema_1 = require("../schemas/item.schema");
let ItemService = class ItemService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(item) {
        const newItem = new this.itemModel(item);
        return newItem.save();
    }
    async findAll() {
        return this.itemModel.find().exec();
    }
    async findOne(id) {
        const item = await this.itemModel.findOne({ _id: id }).exec();
        if (!item) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        return item;
    }
    async update(id, updateData) {
        const updatedItem = await this.itemModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedItem) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        return updatedItem;
    }
    async delete(id) {
        const result = await this.itemModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_schema_1.Item.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ItemService);
//# sourceMappingURL=item.service.js.map