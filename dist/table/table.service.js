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
exports.TableService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const table_schema_1 = require("../schemas/table.schema");
let TableService = class TableService {
    constructor(tableModel) {
        this.tableModel = tableModel;
    }
    async create(table) {
        const newTable = new this.tableModel(table);
        return newTable.save();
    }
    async findAll() {
        return this.tableModel.find().exec();
    }
    async findOne(id) {
        const table = await this.tableModel.findOne({ _id: id }).exec();
        if (!table) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
        return table;
    }
    async update(id, updateData) {
        const updatedTable = await this.tableModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedTable) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
        return updatedTable;
    }
    async delete(id) {
        const result = await this.tableModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found`);
        }
    }
};
exports.TableService = TableService;
exports.TableService = TableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(table_schema_1.Table.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TableService);
//# sourceMappingURL=table.service.js.map