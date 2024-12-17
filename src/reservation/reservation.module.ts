import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './model/reservation.schema';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { RestaurantModule } from '../restaurant/restaurant.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Reservation.name, 
                schema: ReservationSchema 
            }
        ]),
        RestaurantModule,
    ],
    controllers: [ReservationController],
    providers: [ReservationService],
    exports: [ReservationService]
})
export class ReservationModule {}
