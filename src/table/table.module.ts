import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Table, TableSchema } from './model/table.schema';
import { TableService } from './table.service';
import { TableController } from './table.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Table.name, 
                schema: TableSchema 
            }
        ]),
    ],
    controllers: [TableController],
    providers: [TableService]
})
export class TableModule {}
