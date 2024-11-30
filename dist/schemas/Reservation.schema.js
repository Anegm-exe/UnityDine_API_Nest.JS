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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationSchema = exports.Reservation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Reservation = class Reservation {
};
exports.Reservation = Reservation;
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: 'User' }),
    __metadata("design:type", String)
], Reservation.prototype, "customer_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: 'Table' }),
    __metadata("design:type", String)
], Reservation.prototype, "table_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Reservation.prototype, "reservation_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Reservation.prototype, "end_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Ready', enum: ['Ready', 'Reserved'] }),
    __metadata("design:type", String)
], Reservation.prototype, "reservation_status", void 0);
exports.Reservation = Reservation = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Reservation);
exports.ReservationSchema = mongoose_1.SchemaFactory.createForClass(Reservation);
//# sourceMappingURL=reservation.schema.js.map