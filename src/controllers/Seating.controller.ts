import { Request, Response } from 'express';
import SeatingService from '../services/Seating.service';

class SeatingController {

    async getID(req: Request, res: Response): Promise<Response> {
        try {
            const { TId } = req.params;
            const seating = await SeatingService.getSeatingById(TId);
            return res.status(200).json({ id: seating._Tid });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getCapacity(req: Request, res: Response): Promise<Response> {
        try {
            const { TId } = req.params;
            const seating = await SeatingService.getSeatingById(TId);
            return res.status(200).json({ capacity: seating.Capacity });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async isAvailable(req: Request, res: Response): Promise<Response> {
        try {
            const { TId } = req.params;
            const seating = await SeatingService.getSeatingById(TId);
            return res.status(200).json({ capacity: seating.Available });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async setCapacity(req: Request, res: Response): Promise<Response> {
        try {
            const { TID } = req.params;
            const { capacity } = req.body;

            if (!capacity)
                return res.status(400).json({ success: false, message: 'Capacity is required' });

            const updatedSeating = await SeatingService.updateSeating(TID, { capacity });

            if (!updatedSeating)
                return res.status(404).json({ success: false, message: 'Seating Not Found' });

            return res.status(200).json({ success: true, seating: updatedSeating });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
     async setAvailability(req: Request, res: Response): Promise<Response> {
        try {
            const { TID } = req.params;
            const { available } = req.body;

            if (!available)
                return res.status(400).json({ success: false, message: 'Availability is required' });

            const updatedSeating = await SeatingService.updateSeating(TID, { available });

            if (!updatedSeating)
                return res.status(404).json({ success: false, message: 'Seating Not Found' });

            return res.status(200).json({ success: true, seating: updatedSeating });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export const seatingController = new SeatingController();