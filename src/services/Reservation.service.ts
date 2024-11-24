// reservation.service.ts 
import { Types } from 'mongoose';
import { Reservation } from '../schemas/Reservation.schema';

class ReservationService {
  // Create a new reservation
  async createReservation(reservationData: any): Promise<any> {
    try {
      const reservation = new Reservation(reservationData);
      return await reservation.save();
    } catch (error: any) {
      throw new Error(`Error creating reservation: ${error.message}`);
    }
  }

  // Get all reservations
  async getAllReservations(): Promise<any[]> {
    try {
      return await Reservation.find();
    } catch (error: any) {
      throw new Error(`Error fetching reservations: ${error.message}`);
    }
  }

  // Get a reservation by ID
  async getReservationById(id: string): Promise<any | null> {
    try {
      return await Reservation.findById(new Types.ObjectId(id));
    } catch (error: any) {
      throw new Error(`Error fetching reservation by ID: ${error.message}`);
    }
  }

  // Update a reservation by ID
  async updateReservation(id: string, updateData: Partial<any>): Promise<any | null> { 
    try {
      const updatedReservation = await Reservation.findByIdAndUpdate(
        new Types.ObjectId(id),
        updateData,
        { new: true }
      );

      if (!updatedReservation) {
        throw new Error('Reservation not found');
      }

      return updatedReservation;
    } catch (error: any) {
      throw new Error(`Error updating reservation: ${error.message}`);
    }
  }

  // Delete a reservation by ID
  async deleteReservation(id: string): Promise<any | null> {
    try {
      return await Reservation.findByIdAndDelete(new Types.ObjectId(id));
    } catch (error: any) {
      throw new Error(`Error deleting reservation: ${error.message}`);
    }
  }
}

export default new ReservationService();