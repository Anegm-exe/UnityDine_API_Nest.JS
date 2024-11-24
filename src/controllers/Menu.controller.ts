import { Request, Response } from 'express';
import MenuService from '../services/Menu.service';

class MenuController {

    //fetch all items in menu
    async getItems(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params; 
            const menu = await MenuService.getMenuById(menuId);

            if (!menu) {
                return res.status(404).json({ message: 'Menu not found' }); 
            }
            return res.status(200).json({ items: menu.items });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    //getters
    async getID(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params;
            const menu = await MenuService.getMenuById(menuId);
            return res.status(200).json({ id: menu._id });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getName(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params;
            const menu = await MenuService.getMenuById(menuId);
            return res.status(200).json({ name: menu.name });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getType(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params;
            const menu = await MenuService.getMenuById(menuId);
            return res.status(200).json({ type: menu.type });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getDescription(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params;
            const menu = await MenuService.getMenuById(menuId);
            return res.status(200).json({ description: menu.description });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getPrice(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params;
            const menu = await MenuService.getMenuById(menuId);
            return res.status(200).json({ price: menu.type });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
       async getAvailability(req: Request, res: Response): Promise<Response> {
        try {
            const { menuId } = req.params;
            const menu = await MenuService.getMenuById(menuId);
            return res.status(200).json({ available: menu.type });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }



}
