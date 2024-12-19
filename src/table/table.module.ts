import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Table, TableSchema } from './model/table.schema';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Table.name, 
                schema: TableSchema 
            }
        ]),RestaurantModule
    ],
    controllers: [TableController],
    providers: [TableService],
    exports:[TableService]
})
export class TableModule {}
