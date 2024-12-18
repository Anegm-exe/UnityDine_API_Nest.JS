import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './model/order.schema';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Order.name, 
                schema: OrderSchema 
            }
        ]),RestaurantModule
    ],
    controllers: [OrderController],
    providers: [OrderService],
    exports: [OrderService]
})
export class OrderModule {}
