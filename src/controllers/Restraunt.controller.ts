import { Request, Response } from 'express';
import RestrauntService from '../services/Restraunt.service';

class RestrauntController {

    // Gettings
    // ADD GET ALL RESTAURANTs + THEIR DETIALS

    async getName(req: Request, res: Response): Promise<Response> {
        try {
            const { RID } = req.params;
            const restraunt = await RestrauntService.getRestrauntById(RID);
            return res.status(200).json({ id: restraunt.Name });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getLocation(req: Request, res: Response): Promise<Response> {
        try {
            const { RID } = req.params;
            const restraunt = await RestrauntService.getRestrauntById(RID);
            return res.status(200).json({ capacity: restraunt.Location });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getContact(req: Request, res: Response): Promise<Response> {
        try {
            const { RID } = req.params;
            const restraunt = await RestrauntService.getRestrauntById(RID);
            return res.status(200).json({ capacity: restraunt.Contact });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    async getRating(req: Request, res: Response): Promise<Response> {
        try {
            const { RID } = req.params;
            const restraunt = await RestrauntService.getRestrauntById(RID);
            return res.status(200).json({ capacity: restraunt.Rating });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export const restrauntController = new RestrauntController();