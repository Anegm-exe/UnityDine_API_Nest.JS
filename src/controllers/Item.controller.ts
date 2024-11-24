import { Request, Response } from 'express';
import ItemService from '../services/Item.service';

class ItemController {

    //fetch all items in menu
    async getItems(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params; 
            const item = await ItemService.getItemById(itemId);

            if (!item) {
                return res.status(404).json({ message: 'Menu not found' }); 
            }
            return res.status(200).json({ items: item.items });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    //getters
    async getID(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ id: item._id });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // RID
    async getRID(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ id: item._id });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getName(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ name: item.name });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getType(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ type: item.type });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getDescription(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ description: item.description });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getPrice(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ price: item.type });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAvailability(req: Request, res: Response): Promise<Response> {
        try {
            const { itemId } = req.params;
            const item = await ItemService.getItemById(itemId);
            return res.status(200).json({ available: item.type });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Setters
    // All The Parameters Settes + A Full Item Setter // Future Imp
}
