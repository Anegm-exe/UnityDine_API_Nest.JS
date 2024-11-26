import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SeatingService } from '../services/Seating.service';
import { Seating } from '../schemas/Seating.schema';

@Controller('seatings')
export class SeatingController {
    constructor(private readonly seatingService: SeatingService) { }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Post()
    async create(@Body() createSeatingDto: Seating): Promise<Seating> {
        return this.seatingService.create(createSeatingDto);
    }

    @Get()
    async findAll(): Promise<Seating[]> {
        return this.seatingService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Seating> {
        return this.seatingService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateSeatingDto: Partial<Seating>,
    ): Promise<Seating> {
        return this.seatingService.update(id, updateSeatingDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.seatingService.delete(id);
    }
}