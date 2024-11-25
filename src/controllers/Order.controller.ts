import { Request, Response } from 'express';
import OrderService from '../services/Order.service';

class OrderController {

    // Gettings

    async getRID(req: Request, res: Response): Promise<Response> {
        try {
            const { OID } = req.params;
            const order = await OrderService.getOrderById(OID);
            return res.status(200).json({ id: order.RID });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getOrderDate(req: Request, res: Response): Promise<Response> {
        try {
            const { OID } = req.params;
            const restraunt = await OrderService.getOrderById(OID);
            return res.status(200).json({ capacity: restraunt.orderDate });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getItemsById(req: Request, res: Response): Promise<Response> {
        try {
            const { OID } = req.params;
            const restraunt = await OrderService.getOrderById(OID);
            return res.status(200).json({ capacity: restraunt.ItemsById });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    async getOrderstatus(req: Request, res: Response): Promise<Response> {
        try {
            const { OID } = req.params;
            const restraunt = await OrderService.getOrderById(OID);
            return res.status(200).json({ capacity: restraunt.orderstatus });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export const orderController = new OrderController();