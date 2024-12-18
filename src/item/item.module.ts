import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './model/item.schema';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Item.name, 
                schema: ItemSchema 
            }
        ]),RestaurantModule
    ],
    controllers: [ItemController],
    providers: [ItemService]
})
export class ItemModule {}
