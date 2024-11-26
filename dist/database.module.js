"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Item_schema_1 = require("./schemas/Item.schema");
const Reservation_schema_1 = require("./schemas/Reservation.schema");
const Restaurant_schema_1 = require("./schemas/Restaurant.schema");
const Seating_schema_1 = require("./schemas/Seating.schema");
const user_schema_1 = require("./schemas/user.schema");
const Order_schema_1 = require("./schemas/Order.schema");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://dbUser:ClRDnHMGCWJu8JpO@unitydine.jnzpu.mongodb.net/UnityDine'),
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Restaurant', schema: Restaurant_schema_1.RestaurantSchema },
                { name: 'Item', schema: Item_schema_1.ItemSchema },
                { name: 'Reservation', schema: Reservation_schema_1.ReservationSchema },
                { name: 'Seating', schema: Seating_schema_1.SeatingSchema },
                { name: 'Order', schema: Order_schema_1.OrderSchema },
            ]),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map