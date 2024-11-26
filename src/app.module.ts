import { Module } from '@nestjs/common';

// Import the DatabaseModule
import { DatabaseModule } from './database.module'; 

// Importing Controllers
import { UserController } from './controllers/user.controller';
import { ItemController } from './controllers/Item.controller';
import { ReservationController } from './controllers/Reservation.controller';
import { RestaurantController } from './controllers/Restaurant.controller';
import { OrderController } from './controllers/Order.controller';
import { SeatingController } from './controllers/Seating.controller';

// Importing Services
import { UserService } from './services/user.service';
import { ItemService } from './services/Item.service';
import { ReservationService } from './services/Reservation.service';
import { RestaurantService } from './services/Restaurant.service';
import { OrderService } from './services/Order.service';
import { SeatingService } from './services/Seating.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController, ItemController, ReservationController, RestaurantController, OrderController, SeatingController], // Add your Controllers Here For The Main To Read
    providers: [UserService, ItemService, ReservationService, RestaurantService, OrderService, SeatingService], // Add your services Here For The Main To Read
})
export class AppModule { }
