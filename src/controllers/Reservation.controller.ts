import { Request, Response } from 'express';
import reservationService from '../services/Reservation.service'; 

class ReservationController {
  async getAllReservations(req: Request, res: Response) {
    try {
      const reservations = await reservationService.getAllReservations();
      res.status(200).json(reservations);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async createReservation(req: Request, res: Response) {
    try {
      const reservationData = req.body;
      const newReservation = await reservationService.createReservation(reservationData);
      res.status(201).json(newReservation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getReservationById(req: Request, res: Response) {
    try {
      const { reservationId } = req.params;
      const reservation = await reservationService.getReservationById(reservationId);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(200).json(reservation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateReservation(req: Request, res: Response) {
    try {
      const { reservationId } = req.params;
      const updateData = req.body;
      const updatedReservation = await reservationService.updateReservation(
        reservationId,
        updateData
      );
      if (!updatedReservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(200).json(updatedReservation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteReservation(req: Request, res: Response) {
    try {
      const { reservationId } = req.params;
      const deletedReservation = await reservationService.deleteReservation(reservationId);
      if (!deletedReservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ReservationController();