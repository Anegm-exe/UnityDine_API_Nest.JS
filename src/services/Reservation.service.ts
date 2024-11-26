import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from '../schemas/Reservation.schema';

@Injectable()
export class ReservationService {
    constructor(@InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>) { }

    // Create A Reservation With Data Provided
    async create(reservation: Reservation): Promise<Reservation> {
        const newReservation = new this.reservationModel(reservation);
        return newReservation.save();
    }

    // Get All Reservations From The Table
    async findAll(): Promise<Reservation[]> {
        return this.reservationModel.find().exec();
    }

    // Find A Specific Menu Item by ID
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