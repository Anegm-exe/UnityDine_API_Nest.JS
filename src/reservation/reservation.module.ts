import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './model/reservation.schema';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { TableModule } from 'src/table/table.module';
import { OrderModule } from 'src/order/order.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Reservation.name, 
                schema: ReservationSchema 
            }
        ]),
        RestaurantModule,
        TableModule,
        OrderModule
    ],
    controllers: [ReservationController],
    providers: [ReservationService],
    exports: [ReservationService]
})
export class ReservationModule {}
