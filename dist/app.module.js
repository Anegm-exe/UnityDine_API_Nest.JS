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
const database_module_1 = require("./database.module");
const user_controller_1 = require("./controllers/user.controller");
const Item_controller_1 = require("./controllers/Item.controller");
const Reservation_controller_1 = require("./controllers/Reservation.controller");
const Restaurant_controller_1 = require("./controllers/Restaurant.controller");
const Order_controller_1 = require("./controllers/Order.controller");
const Seating_controller_1 = require("./controllers/Seating.controller");
const user_service_1 = require("./services/user.service");
const Item_service_1 = require("./services/Item.service");
const Reservation_service_1 = require("./services/Reservation.service");
const Restaurant_service_1 = require("./services/Restaurant.service");
const Order_service_1 = require("./services/Order.service");
const Seating_service_1 = require("./services/Seating.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [user_controller_1.UserController, Item_controller_1.ItemController, Reservation_controller_1.ReservationController, Restaurant_controller_1.RestaurantController, Order_controller_1.OrderController, Seating_controller_1.SeatingController],
        providers: [user_service_1.UserService, Item_service_1.ItemService, Reservation_service_1.ReservationService, Restaurant_service_1.RestaurantService, Order_service_1.OrderService, Seating_service_1.SeatingService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map