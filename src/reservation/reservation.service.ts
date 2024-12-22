import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './model/reservation.schema';
import { Restaurant, RestaurantDocument } from '../restaurant/model/restaurant.schema';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { TableService } from 'src/table/table.service';
import { OrderService } from 'src/order/order.service';

@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
        private readonly restaurantService: RestaurantService,
        private readonly tableService: TableService,
        private readonly orderService: OrderService
    ) { }

    // Create A Reservation With Data Provided
    async create(createReservationDto: Reservation): Promise<Reservation> {
        // Create the reservation first
        const createdReservation = await this.reservationModel.create(createReservationDto);
                const reservation = await createdReservation.save();

        // Add the reservation ID to the associated restaurant's `reservations` array
        const restaurant = await this.restaurantService.findOne(createReservationDto.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${createReservationDto.restaurant_id} not found`);
        }
        await this.restaurantService.addReservation(reservation.restaurant_id,reservation._id);
        return createdReservation;
    }

    // Get All Reservations From The Table
    async findAll(): Promise<Reservation[]> {
        return await this.reservationModel.find().exec();
    }

    // Find All Reservations From The Table By A Specific User ID
    async findByUserId(userId: string): Promise<Reservation[]> {
        return await this.reservationModel.find({ customer_id: userId }).exec();
    }

    async findByRestaurantId(restaurantId: string): Promise<Reservation[]> {
        return await this.reservationModel.find({ restaurant_id: restaurantId }).exec();
    }

    // Find A Specific Reservation Item by ID
    async findOne(id: string): Promise<Reservation> {
        const reservation = await this.reservationModel.findOne({ _id: id }).exec();
        if (!reservation) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
        return reservation;
    }

    // Update The Content Of A Reservation
    async update(id: string, updateData: Partial<Reservation>): Promise<Reservation> {
        const updatedReservation = await this.reservationModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedReservation) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
        return updatedReservation;
    }

    // Delete A reservation
    async delete(id: string): Promise<void> {
        const reservation = await this.reservationModel.findByIdAndDelete({ _id: id }).exec();
        // is deleted
        if (!reservation) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
        // delete the reservation ID to the associated restaurant's `reservations` array
        const restaurant = await this.restaurantService.findOne(reservation.restaurant_id);
        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${reservation.restaurant_id} not found`);
        }
        await this.restaurantService.deleteReservation(reservation.restaurant_id,reservation._id);
        await this.tableService.deleteReservation(reservation.table_id,reservation._id);
        await this.orderService.deleteByReservation(reservation.restaurant_id)
    }
}