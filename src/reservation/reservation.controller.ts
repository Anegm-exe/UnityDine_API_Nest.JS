import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from '../schemas/reservation.schema';

@Controller('reservations')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) { }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Post()
    async create(@Body() createReservationDto: Reservation): Promise<Reservation> {
        return this.reservationService.create(createReservationDto);
    }

    @Get()
    async findAll(): Promise<Reservation[]> {
        return this.reservationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Reservation> {
        return this.reservationService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateReservationDto: Partial<Reservation>,
    ): Promise<Reservation> {
        return this.reservationService.update(id, updateReservationDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.reservationService.delete(id);
    }
}