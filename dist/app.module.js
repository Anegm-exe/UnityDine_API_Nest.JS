"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const item_module_1 = require("./item/item.module");
const order_module_1 = require("./order/order.module");
const user_module_1 = require("./user/user.module");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const reservation_module_1 = require("./reservation/reservation.module");
const table_module_1 = require("./table/table.module");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://dbUser:ClRDnHMGCWJu8JpO@unitydine.jnzpu.mongodb.net/UnityDine'),
            item_module_1.ItemModule,
            order_module_1.OrderModule,
            user_module_1.UserModule,
            restaurant_module_1.RestaurantModule,
            reservation_module_1.ReservationModule,
            table_module_1.TableModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map