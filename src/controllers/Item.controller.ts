import { Request, Response } from 'express';
import ItemService from '../services/Item.service';

class ItemController {
    // Get all items of restaurant including prices, names, descriptions, types, availability and ids.

    async getItemsByRestaurantID(req: Request, res: Response): Promise<Response> {
        const { restaurantId } = req.params;

        if (!restaurantId) {
            return res.status(400).json({ error: "Restaurant ID is required" });
        }
        try {
            const menu = await ItemService.getItemsByRestaurantId(restaurantId);
    
            if (!menu.length) {
                return res.status(404).json({ message: "No menu found for the specified restaurant." });
            }
            const processedMenu = menu.map((item) => ({
                id: item._id,
                names: item.name, // Array of names
                descriptions: item.description, // Array of descriptions
                prices: item.price, // Array of prices
                types: item.type, // Array of types
                availability: item.available, // Array of availability flags
            }));
    
            return res.status(200).json({ restaurantId, menu: processedMenu });
        } catch (error: any) {
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
            return res.status(200).json({ id: item._Rid });
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
