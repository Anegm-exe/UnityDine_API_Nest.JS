import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TableService } from './table.service';
import { Table } from './model/table.schema';

@Controller('tables')
export class TableController {
    constructor(private readonly seatingService: TableService) { }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Post()
    async create(@Body() createSeatingDto: Table): Promise<Table> {
        return this.seatingService.create(createSeatingDto);
    }

    @Get()
    async findAll(): Promise<Table[]> {
        return this.seatingService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Table> {
        return this.seatingService.findOne(id);
    }

    @Get('restaurant/:restaurantId')
    async findByRestaurantId(@Param('restaurantId') restaurantId: string): Promise<Table[]> {
        return this.seatingService.findByRestaurantId(restaurantId);
    }

    @Put(':id')
    async update(@Param('id') id: number,@Body() updateSeatingDto: Partial<Table>): Promise<Table> {
        return this.seatingService.update(id, updateSeatingDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.seatingService.delete(id);
    }
}