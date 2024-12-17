import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './model/reservation.schema';
import { Restaurant, RestaurantDocument } from '../restaurant/model/restaurant.schema';

@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
        @InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>
    ) { }

    // Create A Reservation With Data Provided
    async create(createReservationDto: Reservation): Promise<Reservation> {
        // Create the reservation first
        const createdReservation = new this.reservationModel(createReservationDto);
        await createdReservation.save();

        // Add the reservation ID to the associated restaurant's `reservations` array
        const restaurantId = createReservationDto.restaurant_id; // Assuming the DTO contains `restaurant_id`
        const restaurant = await this.restaurantModel.findById(restaurantId);

        if (!restaurant) {
            throw new NotFoundException(`Restaurant with ID ${restaurantId} not found`);
        }

        restaurant.reservations.push(createdReservation._id); // Add the reservation ID
        await restaurant.save(); // Save the updated restaurant document

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
    async findOne(id: number): Promise<Reservation> {
        const reservation = await this.reservationModel.findOne({ _id: id }).exec();
        if (!reservation) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
        return reservation;
    }

    // Update The Content Of A Reservation
    async update(id: number, updateData: Partial<Reservation>): Promise<Reservation> {
        const updatedReservation = await this.reservationModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedReservation) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
        return updatedReservation;
    }

    // Delete A Reservation
    async delete(id: number): Promise<void> {
        const result = await this.reservationModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Reservation with ID ${id} not found`);
        }
    }
}