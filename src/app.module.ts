import { Module } from '@nestjs/common';

// Importing Services
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ReservationModule } from './reservation/reservation.module';
import { TableModule } from './table/table.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://dbUser:ClRDnHMGCWJu8JpO@unitydine.jnzpu.mongodb.net/UnityDine'),
        ItemModule,
        OrderModule, 
        UserModule, 
        RestaurantModule,
        ReservationModule, 
        TableModule
    ]
})
export class AppModule { }