import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemSchema } from './schemas/Item.schema';
import { ReservationSchema } from './schemas/Reservation.schema';
import { RestaurantSchema } from './schemas/Restaurant.schema';
import { SeatingSchema } from './schemas/Seating.schema';
import { UserSchema } from './schemas/user.schema';
import { OrderSchema } from './schemas/Order.schema';

@Module({
    imports: [
        // Connect to MongoDB 
        MongooseModule.forRoot('mongodb+srv://dbUser:ClRDnHMGCWJu8JpO@unitydine.jnzpu.mongodb.net/UnityDine'),

        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },                           // Register The UserSchema
            { name: 'Restaurant', schema: RestaurantSchema },               // Register The RestaurantSchema
            { name: 'Item', schema: ItemSchema },                           // Register The ItemSchema
            { name: 'Reservation', schema: ReservationSchema },             // Register The ReservationSchema
            { name: 'Seating', schema: SeatingSchema },                     // Register The SeatingSchema
            { name: 'Order', schema: OrderSchema },                         // Register The SeatingSchema
        ]),
    ],
    exports: [MongooseModule],
})
export class DatabaseModule { }