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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reservation_schema_1 = require("../schemas/reservation.schema");
let ReservationService = class ReservationService {
    constructor(reservationModel) {
        this.reservationModel = reservationModel;
    }
    async create(reservation) {
        const newReservation = new this.reservationModel(reservation);
        return newReservation.save();
    }
    async findAll() {
        return this.reservationModel.find().exec();
    }
    async findOne(id) {
        const reservation = await this.reservationModel.findOne({ _id: id }).exec();
        if (!reservation) {
            throw new common_1.NotFoundException(`Reservation with ID ${id} not found`);
        }
        return reservation;
    }
    async update(id, updateData) {
        const updatedReservation = await this.reservationModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedReservation) {
            throw new common_1.NotFoundException(`Reservation with ID ${id} not found`);
        }
        return updatedReservation;
    }
    async delete(id) {
        const result = await this.reservationModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Reservation with ID ${id} not found`);
        }
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reservation_schema_1.Reservation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map